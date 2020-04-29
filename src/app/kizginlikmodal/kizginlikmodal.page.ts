import { Component, OnInit, ɵConsole } from '@angular/core';
import { LoadingController,AlertController } from '@ionic/angular';
import {RequestService} from '../api/request.service';
import { Storage } from '@ionic/storage';


@Component({
  selector: 'app-kizginlikmodal',
  templateUrl: './kizginlikmodal.page.html',
  styleUrls: ['./kizginlikmodal.page.scss'],
})
export class KizginlikmodalPage implements OnInit {

  hayvan_id;

  kizlik_tarihi:any;
  kizginlik_tarihi:any;
  kizginlikHayvanId:any;
  not:any;

  responseData:any;

  token:any;
  BASE_URL="http://167.172.156.114/tohumtakvimi/";
  URL_ENDPOINT = "kizginlik_ekle.php";
  



  bodyData = { 
    "kizginlik_tarihi": this.kizginlik_tarihi, "not": this.not};

  constructor(private loadingController:LoadingController,
    private alertController:AlertController,public istek:RequestService,private storage:Storage) { 
      this.storage.get('TOKEN').then((val) => { 
        this.token = val;
        console.log("İşletmede olmayanlar token : " +this.token);
    
        });
    }

  ngOnInit() {
    this.kizginlikHayvanId = `${this.hayvan_id}`;
    console.log("Kızgınlıktaki hayvan id : "+ this.kizginlikHayvanId);
  }

  kizginlikEkle()
  {

    if(this.bodyData.kizginlik_tarihi != null)
    {
    const url = this.BASE_URL+this.URL_ENDPOINT;
    this.istek.getDataAdd(url+"?TOKEN="+this.token
    +"&hayvan_id="+this.kizginlikHayvanId+"&kizginlik_tarihi="+this.bodyData.kizginlik_tarihi+"&not="+this.bodyData.not).subscribe(res=>{
      this.responseData = res;
      if(res.HATA == "0")
      {
        this.basariliModal();
      }
      else{
        this.ekleHata();
      }
      
   
      },err=>{
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
      message: 'Lütfen Kızgınlık Tarihini Boş Bırakmayınız.',
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
