import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, 
  ToastController, Platform, MenuController, AlertController, LoadingController } from '@ionic/angular';
import {RequestService} from '../api/request.service';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-isletmebilgileri',
  templateUrl: './isletmebilgileri.page.html',
  styleUrls: ['./isletmebilgileri.page.scss'],
})
export class IsletmebilgileriPage implements OnInit {


  BASE_URL="http://167.172.156.114/tohumtakvimi/";
  URL_ENDPOINT="isletme_bilgileri.php";
  token:any;

  data:any;
  sahip_adi:any;
  sahip_soyadi:any;
  isletme_no:any;
  toplam_hayvan_adet:any;
  erkek_hayvan_adet:any;
  disi_hayvan_adet:any;
  buzagi_adet:any;
  tohumlama_adet:any;

  constructor(private loadingController:LoadingController,private istek:RequestService,private storage:Storage) {
    this.storage.get('TOKEN').then((val) => { 
      this.token = val;
      console.log(this.token);
      this.bilgiCek();
      });
    
  }

  ngOnInit() {
    this.bilgiCek();
  }
  async bilgiCek()
  {
   
    const url = this.BASE_URL+this.URL_ENDPOINT;
    this.istek.getDataHome(url+"?TOKEN="+this.token).subscribe(res=>{
    console.log("isletme bilgileri :"+res[0]["SAHIP_ADI"]);
    
    this.sahip_adi = res[0]["SAHIP_ADI"];
    this.sahip_soyadi= res[0]["SAHIP_SOYADI"];
    this.isletme_no = res[0]["ISLETME_NO"];
    this.toplam_hayvan_adet = res[0]["TOPLAM_HAYVAN_ADET"];
    this.erkek_hayvan_adet = res[0]["ERKEK_HAYVAN_ADET"];
    this.disi_hayvan_adet = res[0]["DISI_HAYVAN_ADET"];
    this.buzagi_adet = res[0]["BUZAGI_ADET"];
    this.tohumlama_adet = res[0]["TOHUMLAMA_ADET"];
    
      /* SAHIP_ADI,SAHIP_SOYADI, ISLETME_NO, TOPLAM_HAYVAN_ADET, ERKEK_HAYVAN_ADET, DISI_HAYVAN_ADET, BUZAGI_ADET, TOHUMLAMA_ADET */

    },err=>{

        console.log(err); 
        
      })
  }

}
