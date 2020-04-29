import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { NavController, NavParams, 
ToastController, Platform, MenuController, 
AlertController, LoadingController,ModalController } from '@ionic/angular';
import {RequestService} from '../api/request.service';
import { HayvandurumPage } from '../hayvandurum/hayvandurum.page';
import { BilgiduzenlePage } from '../bilgiduzenle/bilgiduzenle.page';
import { from } from 'rxjs';
import { Storage } from '@ionic/storage';
@Component({
  selector: 'app-hayvanlistesi',
  templateUrl: './hayvanlistesi.page.html',
  styleUrls: ['./hayvanlistesi.page.scss'],
})
export class HayvanlistesiPage implements OnInit {
  disiId;
  erkekId;
  getValue:any;
  erkekValue:any;
  disiValue:any;
  param_kupe_numarasi:any;


  BASE_URL="http://167.172.156.114/tohumtakvimi/";
  URL_ENDPOINT="hayvan_listesi.php";
  URL_SEARCH = "hayvan_ara.php";

  veriKontrol:boolean;

  token:any;

  data:any;
  geriAlKontrol:any;
  kullanici_not:any;
  id:any;
  buzagi:any;
  hayvan_adi:any;
  kupe_numarasi:any;
  boga_kupe:any;
  anne_kupe:any;
  dogum_tarihi:any;
  gelis_tarihi:any;
  irk_adi:any;
  cardKontrol:boolean;
  cinsiyet:any;
  not_icerik:any;
  responseSearchData:any;
  paramHayvanID:any;
  paramVal:any;
  bodyData = { 
    "kupe_numarasi": this.kupe_numarasi}
  constructor(private router:ActivatedRoute,private route:Router,private navCtrl:NavController,
    private modalCtrl:ModalController,private istek:RequestService,private alertController:AlertController,
    private storage:Storage) {
      this.storage.get('TOKEN').then((val) => { 
        this.token = val;
        console.log(this.token);
        this.istekKontrol(this.paramVal);
        });
     }

  ngOnInit() {
   
      
      this.storage.get('TOKEN').then((val) => { 
        this.token = val;
        this.disiValue = `${this.disiId}`;
      this.erkekValue = `${this.erkekId}`;
        console.log(this.token);
        if(this.disiValue == 0)
        {
          this.istekKontrol(this.disiValue);
        }
        else if(this.erkekValue == 1)
        {
          this.istekKontrol(this.erkekValue);
        }
        
        });
    
      console.log("Dişi Id"+this.disiValue);
      console.log("Erkek id : "+this.erkekValue);


  }

  async searchData()
{
    console.log("Klavyedeki değer : "+this.bodyData.kupe_numarasi);
    const url = this.BASE_URL+this.URL_SEARCH;
  
    if(this.bodyData.kupe_numarasi != null)
    {
    this.istek.getSearchData(url+"?kupe_numarasi="+this.bodyData.kupe_numarasi+"&TOKEN="+this.token).subscribe(res=>{
      this.responseSearchData = res;
      console.log(this.responseSearchData);
      if(this.responseSearchData["BILGI"] == "NONE")
      {
        this.cardKontrol = false;
        this.araHata();
     
      }
      else{
        this.cardKontrol = true;
        this.id = this.responseSearchData[0]["ID"]
        this.buzagi = this.responseSearchData[0]["BUZAGI"]
        this.kupe_numarasi = this.responseSearchData[0]["KUPE_NUMARASI"]
        this.hayvan_adi = this.responseSearchData[0]["HAYVAN_ADI"]
        this.boga_kupe = this.responseSearchData[0]["BOGA_KUPE"]
        this.anne_kupe = this.responseSearchData[0]["ANNE_KUPE"]
        this.kullanici_not = this.responseSearchData[0]["NOT_ICERIK"]
        this.dogum_tarihi = this.responseSearchData[0]["DOGUM_TARIHI"]
        this.gelis_tarihi = this.responseSearchData[0]["GELIS_TARIHI"]
        this.irk_adi = this.responseSearchData[0]["IRK_ADI"]
        this.cinsiyet = this.responseSearchData[0]["CINSIYET"]
        this.not_icerik = this.responseSearchData[0]["NOT_ICERIK"]
        
      }
      
    },err=>{
   
    })

  }
  else{
    this.nullValue();
  }
}
async nullValue() {
  const alert = await this.alertController.create({
    subHeader: 'Uyarı',
    message: 'Lütfen küpe numarasını boş bırakmayınız.',
    buttons: ['Tamam']
  });

  await alert.present();
}
async araHata() {
  const alert = await this.alertController.create({
    subHeader: 'Uyarı',
    message: 'Belirtilen küpe numarasında hayvan bulunamadı.',
    buttons: ['Tamam']
  });

  await alert.present();
}
 async istekKontrol(valueParam)
  {
    try{
    const url = this.BASE_URL+this.URL_ENDPOINT;
    this.istek.getDataHome(url+"?TOKEN="+this.token+"&cinsiyet="+valueParam).subscribe(res=>{
    this.data = res;
    
    
      console.log(res);
    },err=>{
        console.log(err); 
        
      })
    }
    catch(err)
    {
      this.durumHata();
    }
  }

  async bilgiDuzenle(kupe_numarasi) {
    this.param_kupe_numarasi = kupe_numarasi;
    const modal = await this.modalCtrl.create({
      component: BilgiduzenlePage,
      cssClass: 'custom-modal',
      componentProps: { 
        hayvan_kupe_no_param: this.param_kupe_numarasi
      
      }

    });
    return await modal.present();
  }

  async durumunaBak(hayvanID) {
    this.paramHayvanID = hayvanID;
    const modal = await this.modalCtrl.create({
      component: HayvandurumPage,
      componentProps: { 
        hayvan_id: this.paramHayvanID
      
      }

    });
    return await modal.present();
  }
  
  async durumHata() {
    const alert = await this.alertController.create({
      subHeader: 'Uyarı',
      message: 'Belirlenemeyen bir hata oluştu',
      buttons: ['Tamam']
    });
  
    await alert.present();
  }
}
