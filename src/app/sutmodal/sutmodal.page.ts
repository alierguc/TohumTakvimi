import { Component, OnInit } from '@angular/core';
import { LoadingController,AlertController,ModalController } from '@ionic/angular';
import {RequestService} from '../api/request.service';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-sutmodal',
  templateUrl: './sutmodal.page.html',
  styleUrls: ['./sutmodal.page.scss'],
})
export class SutmodalPage implements OnInit {
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
  URL_ENDPOINT = "sut_ekle.php";

  tarih:any;
  litre:any;
  fiyat:any;
  not:any;
 
  bodyData = { 
    "tarih": this.tarih, "litre": this.litre,
    "fiyat":this.fiyat,"not":this.not};
  sutKontrol:any;

    sutEkle()
    {
      if(this.bodyData.tarih != null && this.bodyData.fiyat != null && this.bodyData.litre != null)
      {
      const url = this.BASE_URL+this.URL_ENDPOINT;
      this.istek.getDataAdd(url+"?TOKEN="+this.token+
      "&tarih="+this.bodyData.tarih+"&litre="+this.bodyData.litre+"&fiyat="+this.bodyData.fiyat+"&not="+this.bodyData.not).subscribe(res=>{
        this.sutKontrol = res;
        console.log(this.sutKontrol);
        if(res.HATA == ["0"])
        {
          this.correctData();
        }
        else{
          this.errorData();
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
      async correctData() {
        const alert = await this.alertController.create({
          subHeader: 'Uyarı',
          message: 'İşleminiz Başarılı.',
          buttons: ['Tamam']
        });
    
        await alert.present();
      }
      async nullValue() {
        const alert = await this.alertController.create({
          subHeader: 'Uyarı',
          message: 'Satış tarihi, litre fiyatı ve verilen litre bölümünü boş bırakmayınız.',
          buttons: ['Tamam']
        });
    
        await alert.present();
      }
}
