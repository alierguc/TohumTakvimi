import { Component } from '@angular/core';
import { NavController, NavParams, 
  ToastController, Platform, MenuController, AlertController, LoadingController } from '@ionic/angular';
import {RequestService} from '../api/request.service';
import { Storage } from '@ionic/storage';
  import { from } from 'rxjs';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  
  BASE_URL="http://167.172.156.114/tohumtakvimi/";
  URL_ENDPOINT = "son_kayit.php";

  son_kayit:any;
  bitis_tarihi:any;
  
  kullanici_not:any;
  token:any;
  kalan_gun:any;
  kontrol:boolean;

  buzagi:any;
  kupe_numarasi:any;
  hayvan_adi:any;
  boga_kupe:any;
  anne_kupe:any;
  dogum_tarihi:any;
  gelis_tarihi:any;
  irk_adi:any;
  cinsiyet:any;
  not_icerik:any;
  
  player_id:any;

  responseHomeData:any;
  /* Token */ 
  /* alVodlRZWERybU11Zmg3OVhnZXYzYm9nOVNEYzROYTg4eWxmclFOSVFnWG5NTngrenBkV1dCWWk4UlR5NTBlY0ZpRmszc2dibWNUSXRiT2pBbExYMklRN1JMTlFkamRxcEtIZnpmcmpFM2diWVJhWEJwSkppdz09 */
  /* Token */
  constructor(private menuController:MenuController,private istek:RequestService,private storage:Storage,private alertController:AlertController) {
    this.kontrol = false;
    this.menuController.enable(true);
    this.storage.get('TOKEN').then((val) => { 
      this.token = val;
      console.log(this.token);
      this.homeGetData();
     
      });
     
      this.storage.get('PLAYER_ID').then((data) => {
        this.player_id = data;
        this.playerIDGet(this.player_id);
        
       });
      
  }

  ngOnInit() {
  }

 playerIDGet(playerID)
  {
 
    const  BASE_URL="http://167.172.156.114/tohumtakvimi/";
    const END_POINT ="player.php";

    const url = BASE_URL+END_POINT;
    this.istek.getDataHome(url+"?TOKEN="+this.token+"&player_id="+playerID).subscribe(res=>{
    },err=>{

        console.log(err); 
        
      })
  }
  //#region istekler
  homeGetData()
  {
    this.storage.get('player_id').then((val) => { 
      this.player_id = val;
      });
      const url = this.BASE_URL+this.URL_ENDPOINT;
      this.istek.getDataHome(url+"?TOKEN="+this.token).subscribe(res=>{
      this.responseHomeData = res;
      console.log(this.responseHomeData);
        if(this.responseHomeData[0]["KUPE_NUMARASI"] != null)
        {
          this.kontrol = true;
        this.buzagi = this.responseHomeData[0]["BUZAGI"];
        this.kupe_numarasi = this.responseHomeData[0]["KUPE_NUMARASI"];
        this.hayvan_adi = this.responseHomeData[0]["HAYVAN_ADI"];
        this.boga_kupe = this.responseHomeData[0]["BOGA_KUPE"];
        this.anne_kupe = this.responseHomeData[0]["ANNE_KUPE"];
        this.dogum_tarihi = this.responseHomeData[0]["DOGUM_TARIHI"];
        this.gelis_tarihi = this.responseHomeData[0]["GELIS_TARIHI"];
        this.irk_adi = this.responseHomeData[0]["IRK_ADI"];
        this.cinsiyet = this.responseHomeData[0]["CINSIYET"];
        this.not_icerik = this.responseHomeData[0]["NOT_ICERIK"];
        }
        
        else
        {
          this.durumHata();
          this.kontrol = false;
        }
      },err=>{
          console.log(err); 
          this.kontrol = false;
        })
  }
  //#endregion

  async durumHata() {
    const alert = await this.alertController.create({
      subHeader: 'Uyarı',
      message: 'Herhangi bir kayıt bulunmamaktadır.',
      buttons: ['Tamam']
    });

    await alert.present();
  }

}
