import { Component, OnInit, ɵConsole } from '@angular/core';
import { LoadingController,AlertController } from '@ionic/angular';
import {RequestService} from '../api/request.service';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-tohumlamamodal',
  templateUrl: './tohumlamamodal.page.html',
  styleUrls: ['./tohumlamamodal.page.scss'],
})
export class TohumlamamodalPage implements OnInit {

  hayvan_id;

  kizlik_tarihi:any;
  kizginlik_tarihi:any;
  tohumlamaID:any;
 

  responseData:any;

  
  BASE_URL="http://167.172.156.114/tohumtakvimi/";
  URL_ENDPOINT = "tohumlama_ekle.php";
  

  boga_kupe:any;
  boga_adi:any;
  tohumlama_tarihi:any;
  tohumlama_yapan:any;
  not:any;
  token:any;

  bodyData = { 
    "boga_kupe": this.boga_kupe, "boga_adi": this.boga_adi,"tohumlama_tarihi":this.tohumlama_tarihi,"tohumlama_yapan":this.tohumlama_yapan,"not":this.not};

  constructor(private loadingController:LoadingController,
    private alertController:AlertController,public istek:RequestService,private storage:Storage) {
      this.storage.get('TOKEN').then((val) => { 
        this.token = val;
        console.log("İşletmede olmayanlar token : " +this.token);
    
        });
     }

  ngOnInit() {
    this.tohumlamaID = `${this.hayvan_id}`;
    console.log("Kızgınlıktaki hayvan id : "+ this.tohumlamaID);
  }

 async tohumlamaEkle()
  {

    if(this.bodyData.boga_kupe != null && this.bodyData.tohumlama_tarihi != null && this.bodyData.tohumlama_yapan != null)
    {
    const url = this.BASE_URL+this.URL_ENDPOINT;
    this.istek.getDataAdd(url+"?TOKEN="+this.token
    +"&hayvan_id="+this.tohumlamaID+"&boga_kupe="+this.bodyData.boga_kupe+"&boga_adi="+this.bodyData.boga_adi+"&tohumlama_tarihi="+this.bodyData.tohumlama_tarihi+"&tohumlama_yapan="+this.bodyData.tohumlama_yapan+"&not="+this.bodyData.not).subscribe(res=>{
      this.responseData = res;
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
    else{
      this.nullValue();
      
    }
   
  
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