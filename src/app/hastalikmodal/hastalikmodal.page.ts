import { Component, OnInit, ɵConsole } from '@angular/core';
import { LoadingController,AlertController } from '@ionic/angular';
import {RequestService} from '../api/request.service';
import { Storage } from '@ionic/storage';
import { async } from '@angular/core/testing';
@Component({
  selector: 'app-hastalikmodal',
  templateUrl: './hastalikmodal.page.html',
  styleUrls: ['./hastalikmodal.page.scss'],
})
export class HastalikmodalPage implements OnInit {
  token:any;
  constructor(private loadingController:LoadingController,
    private alertController:AlertController,public istek:RequestService,private storage:Storage) { 
      this.storage.get('TOKEN').then((val) => { 
        this.token = val;
        console.log(this.token);
        
        });
    }

    getData:any;
    hayvan_id;
    hayvanID:any;
   

    hastalik_adi:any;
    hastalik_tarihi:any;
    tedavi:any;
    tedavi_yapan:any;
    not:any;
  ngOnInit() {
    this.hayvanID = `${this.hayvan_id}`;
    console.log("hayvan id hastalik : "+this.hayvanID)
  }

  
  
  BASE_URL="http://167.172.156.114/tohumtakvimi/";
  URL_ENDPOINT = "hastalik_ekle.php";
  bodyData = { 
    "hastalik_adi": this.hastalik_adi, "hastalik_tarihi": this.hastalik_tarihi,
    "tedavi":this.tedavi,"tedavi_yapan":this.tedavi_yapan,"not":this.not,};

  async asiEkle()
  {

    const url = this.BASE_URL+this.URL_ENDPOINT;
    this.istek.getDataAdd(url+"?TOKEN="+this.token
    +"&hayvan_id="+this.hayvanID+"&hastalik_adi="+this.bodyData.hastalik_adi+"&hastalik_tarihi="+this.bodyData.hastalik_tarihi+"&tedavi="+this.bodyData.tedavi+"&tedavi_yapan="+this.bodyData.tedavi_yapan+"&not="+this.bodyData.not).subscribe(res=>{
      this.getData = res;

      console.log("Tohumlama çıktı :"+ res);
      if(res.HATA == "0")
      {
        this.basariliModal();
      }
      else{
        console.log(res);
        this.ekleHata();
      }
      
   
      },err=>{
        console.log(err);
      this.ekleHata();

      })
    }
   
   
   
  async ekleHata() {
    const alert = await this.alertController.create({
      subHeader: 'Uyarı',
      message: 'Belirlenemeyen bir hata oluştu.',
      buttons: ['Tamam']
    });

    await alert.present();
  }
  async nullValue() {
    const alert = await this.alertController.create({
      subHeader: 'Uyarı',
      message: 'Lütfen Tohumlama Tarihi, boğa küpe numarası ve tohumlama yapan kişi bilgilerini boş bırakmayınız.',
      buttons: ['Tamam']
    });

    await alert.present();
  }
  async basariliModal() {
    const alert = await this.alertController.create({
      subHeader: 'Uyarı',
      message: 'İşleminiz Başarılı.',
      buttons: ['Tamam']
    });

    await alert.present();
  }
}
