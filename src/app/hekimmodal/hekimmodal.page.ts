import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { NavController, NavParams, 
ToastController, Platform, MenuController, 
AlertController, LoadingController,ModalController } from '@ionic/angular';
import {RequestService} from '../api/request.service';
import { HayvandurumPage } from '../hayvandurum/hayvandurum.page';
import { from } from 'rxjs';
import { Storage } from '@ionic/storage'


@Component({
  selector: 'app-hekimmodal',
  templateUrl: './hekimmodal.page.html',
  styleUrls: ['./hekimmodal.page.scss'],
})
export class HekimmodalPage implements OnInit {
 
 
  BASE_URL="http://167.172.156.114/tohumtakvimi/";
  URL_ENDPOINT = "hekim_ekle.php";

  hekimData:any;
  token:any;
  hekim_adi_soyadi:any;
  toplam_tutar:any;
  yapilan_odeme:any;
  kalan_tutar:any;
  odeme_tarihi:any;
  not:any;

  bodyData = { 
    "hekim_adi_soyadi": this.hekim_adi_soyadi,"toplam_tutar": this.toplam_tutar, "yapilan_odeme": this.yapilan_odeme, 
    "kalan_tutar": this.kalan_tutar,"odeme_tarihi": this.odeme_tarihi,"not": this.not};

  constructor(private istek:RequestService,private alertController:AlertController,private storage:Storage) {
    this.storage.get('TOKEN').then((val) => { 
      this.token = val;
      console.log(this.token);
      });
   }

  ngOnInit() {
  }
  
  async kontrol()
  {
    console.log("Hekim Adı Soyadı : "+ this.bodyData.hekim_adi_soyadi);
    console.log("Kalan Tutar : "+ this.bodyData.kalan_tutar);
    console.log("Not : "+ this.bodyData.not);
    console.log("Ödeme Tarihi : "+ this.bodyData.odeme_tarihi);
    console.log("Toplam Tutar : "+ this.bodyData.toplam_tutar);
    console.log("Yapılan Ödeme : "+ this.bodyData.yapilan_odeme);
  }
  async bilgiCek()
  {
   
    const url = this.BASE_URL+this.URL_ENDPOINT;
    this.istek.getSearchData(url+"?TOKEN="+this.token
    +"&hekim_adi_soyadi="+this.bodyData.hekim_adi_soyadi+"&toplam_tutar="+this.bodyData.toplam_tutar+"&yapilan_odeme="+this.bodyData.yapilan_odeme+
    "&kalan_tutar="+this.bodyData.kalan_tutar+"&odeme_tarihi="+this.bodyData.odeme_tarihi+"&not="+this.bodyData.not).subscribe(res=>{
    this.hekimData =res;
      console.log(this.hekimData);
    if(res.HATA == "0")
    {
      this.successData();
    }
    else{
      this.errorData();
    }
     
      /* hekim_adi_soyadi, toplam_tutar,yapilan_odeme,kalan_tutar,odeme_tarihi,not */
    },err=>{

        console.log(err); 
        
      })
  }
  async errorData() {
    const alert = await this.alertController.create({
      subHeader: 'Uyarı',
      message: 'Belirlenemeyen bir hata oluştu.',
      buttons: ['Tamam']
    });

    await alert.present();
  }
  async successData() {
    const alert = await this.alertController.create({
      subHeader: 'Uyarı',
      message: 'İşleminiz Başarılı.',
      buttons: ['Tamam']
    });

    await alert.present();
  }
}
