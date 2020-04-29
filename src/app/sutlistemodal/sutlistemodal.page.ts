import { Component, OnInit } from '@angular/core';
import { LoadingController,AlertController,ModalController } from '@ionic/angular';
import {RequestService} from '../api/request.service';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-sutlistemodal',
  templateUrl: './sutlistemodal.page.html',
  styleUrls: ['./sutlistemodal.page.scss'],
})
export class SutlistemodalPage implements OnInit {
  token:any;
  constructor(private modalCtrl:ModalController,private loadingController:LoadingController,
    private alertController:AlertController,public istek:RequestService,private storage:Storage) {
      this.storage.get('TOKEN').then((val) => { 
        this.token = val;
        console.log("İşletmede olmayanlar token : " +this.token);
    
        });
     }

  ngOnInit() {
  }

  
  BASE_URL="http://167.172.156.114/tohumtakvimi/";
  URL_ENDPOINT = "sut_bilgileri.php";

  tarih:any;
  litre:any;
  fiyat:any;
  not:any;
 
  bodyData = { 
    "tarih": this.tarih};
  sutKontrol:any;

    async sutAra()
    {
      if(this.bodyData.tarih != null)
      {
      const url = this.BASE_URL+this.URL_ENDPOINT;
      this.istek.getDataAdd(url+"?TOKEN="+this.token+
      "&tarih="+this.bodyData.tarih).subscribe(res=>{
        console.log(this.sutKontrol);
        if(res == "NONE")
        {
          this.noneData();
        }
        else{
          this.sutKontrol = res;
        }
   
     
        },err=>{
          this.errorData();
        })
      }
      else{
        this.nullValue();
      }
      }
      async errorData() {
        const alert = await this.alertController.create({
          subHeader: 'Uyarı',
          message: 'Belirlenemeyen bir hata oluştu.',
          buttons: ['Tamam']
        });
    
        await alert.present();
      }
      async noneData() {
        const alert = await this.alertController.create({
          subHeader: 'Uyarı',
          message: 'Herhangi bir kayıt bulunmamaktadır.',
          buttons: ['Tamam']
        });
    
        await alert.present();
      }
      async nullValue() {
        const alert = await this.alertController.create({
          subHeader: 'Uyarı',
          message: 'Tarih bölümünü boş bırakmayınız.',
          buttons: ['Tamam']
        });
    
        await alert.present();
      }
}
