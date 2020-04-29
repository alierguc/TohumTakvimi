import { Component, OnInit } from '@angular/core';
import { LoadingController,AlertController } from '@ionic/angular';
import { from } from 'rxjs';
import {RequestService} from '../api/request.service';
import { Storage } from '@ionic/storage';
@Component({
  selector: 'app-buzagimodal',
  templateUrl: './buzagimodal.page.html',
  styleUrls: ['./buzagimodal.page.scss'],
})
export class BuzagimodalPage implements OnInit {

  
  BASE_URL="http://167.172.156.114/tohumtakvimi/";
  URL_ENDPOINT = "buzagi_listesi.php";
  URL_EXTRAPOINT = "hayvan_sil.php";

  kupeNumarası:any;
  token:any;

  buzagi:any;
  kupe_numarasi:any;
  hayvan_adi:any;
  boga_kupe:any;
  anne_kupe:any;
  kontrolLoading:boolean;
  dogum_tarihi:any;
  gelis_tarihi:any;
  irk_adi:any;
  cinsiyet:any;
  not_icerik:any;


  kalan_gun:any;
  son_tarih:any;
  kullanici_not:any;

  kontrolCard:boolean;

  responseDeleteData:any;
  responseSearchData:any;
  bodyData = { 
    "kupe_numarasi": this.kupe_numarasi}
  constructor(private loadingController:LoadingController,private alertController:AlertController,
    private istek:RequestService,private storage:Storage) 
    { 
      this.storage.get('TOKEN').then((val) => { 
        this.token = val;
        console.log(this.token);
        });
    }

  ngOnInit() {
  }


  //#region Istekler
async deleteData(param)
{
    const loading = await this.loadingController.create({
      message: 'İşleminiz gerçekleştiriliyor, lütfen bekleyiniz.',
    });
    await loading.present();
    const url = this.BASE_URL+this.URL_EXTRAPOINT;
    this.istek.getDataDelete(url+"?kupe_numarasi="+param+"&TOKEN="+this.token).subscribe(res=>{
      this.responseDeleteData = res;
      if(this.responseDeleteData["HATA"] == "0")
      {  
      console.log(this.responseDeleteData);
      this.silModal();
      loading.dismiss();  
      this.searchData();
      }
      else{
        this.silHata();
        loading.dismiss();
      }
     
    },err=>{
      loading.dismiss();
    })
}

async searchData()
{
     this.kontrolLoading = true;
    const url = this.BASE_URL+this.URL_ENDPOINT;
    if(this.bodyData.kupe_numarasi != null)
    {
    this.istek.getSearchData(url+"?anne_kupe_numarasi="+this.bodyData.kupe_numarasi+"&TOKEN="+this.token).subscribe(res=>{
      this.responseSearchData = res;
      console.log(this.responseSearchData);
      this.kontrolCard = true;
      this.kontrolLoading = false;
      
      console.log(res);
    if(this.responseSearchData["BILGI"] == "NONE")
    {
      this.kontrolLoading = false;
    
    }
    else{
      this.kontrolCard = true;
      this.kontrolLoading = false;
    
    }
        
    },err=>{
      this.silHata();
      this.kontrolCard = true;
      this.kontrolLoading = false;
    })
  }
  else{
    this.kontrolCard = true;
    this.kontrolLoading = false;
    this.nullValue();
  }
}

//#endregion


  //#region Modallar
 
  async silModal() {
    const alert = await this.alertController.create({
      subHeader: 'Uyarı',
      message: 'İşlem başarılı.',
      buttons: ['Tamam']
    });

    await alert.present();
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
      message: 'Böyle bir kayıt bulunamamaktadır.',
      buttons: ['Tamam']
    });

    await alert.present();
  }

  async silHata() {
    const alert = await this.alertController.create({
      subHeader: 'Uyarı',
      message: 'Belirlenemeyen bir hata oluştu.',
      buttons: ['Tamam']
    });

    await alert.present();
  }
 //#endregion

}
