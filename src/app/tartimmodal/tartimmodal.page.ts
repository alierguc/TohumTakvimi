import { Component, OnInit, ɵConsole } from '@angular/core';
import { LoadingController,AlertController } from '@ionic/angular';
import {RequestService} from '../api/request.service';
import { Storage } from '@ionic/storage';
import { async } from '@angular/core/testing';

@Component({
  selector: 'app-tartimmodal',
  templateUrl: './tartimmodal.page.html',
  styleUrls: ['./tartimmodal.page.scss'],
})
export class TartimmodalPage implements OnInit {
  constructor(private loadingController:LoadingController,
    private alertController:AlertController,public istek:RequestService,private storage:Storage) {
      this.storage.get('TOKEN').then((val) => { 
        this.token = val;
        console.log("İşletmede olmayanlar token : " +this.token);
    
        });
     }
     token:any;
    getData:any;
    hayvan_id;
    hayvanID:any;
    kg:any;
    tartim_tarihi:any;
    not:any;

  ngOnInit() {
    this.hayvanID = `${this.hayvan_id}`;
    console.log("tartım id asilama : "+this.hayvanID)
  }

  
  
  BASE_URL="http://167.172.156.114/tohumtakvimi/";
  URL_ENDPOINT = "tartim_ekle.php";
  bodyData = { 
    "kg": this.kg, "tartim_tarihi": this.tartim_tarihi,"not":this.not};

  async tartimEkle()
  {

    const url = this.BASE_URL+this.URL_ENDPOINT;
    this.istek.getDataAdd(url+"?TOKEN="+this.token+"&hayvan_id="+this.hayvanID+"&kg="+this.bodyData.kg+"&not="+this.bodyData.not+"&tartim_tarihi="+this.bodyData.tartim_tarihi).subscribe(res=>{
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
