import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, 
ToastController, Platform, MenuController, AlertController, LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';
import {RequestService} from '../api/request.service';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.page.html',
  styleUrls: ['./loginpage.page.scss'],
})
export class LoginpagePage implements OnInit {

  kullaniciAdi:string;
  sifre:string;

  
  BASE_URL="http://167.172.156.114/tohumtakvimi/";
  URL_STARTPOINT = "giris.php";
 

  loginAnsReq:any;
  token:any;
  veri = { 
    "isletme_no": this.kullaniciAdi, "sifre": this.sifre};
  constructor(private navController:NavController,private router: Router
  ,private alertController:AlertController,private menuController:MenuController
  ,private istek:RequestService,private loadingController:LoadingController,private storage:Storage) { }

  ngOnInit() {
    this.menuController.enable(false);
  }

  //#region Modallar
  async hata() {
    const alert = await this.alertController.create({
      subHeader: 'Uyarı',
      message: 'Kullanıcı adı veya şifreniz hatalı.',
      buttons: ['Tamam']
    });

    await alert.present();
  }

  async hataUnvisible() {
    const alert = await this.alertController.create({
      subHeader: 'Uyarı',
      message: 'Belirlenemeyen bir hata oluştu.',
      buttons: ['Tamam']
    });

    await alert.present();
  }
   
  async hataNull() {
    const alert = await this.alertController.create({
      subHeader: 'Uyarı',
      message: 'Kullanıcı adı veya şifre bölümünü boş bırakmayınız.',
      buttons: ['Tamam']
    });

    await alert.present();
  }

  //#endregion 


  async girisKontrol()
  {
    const loading = await this.loadingController.create({
      message: 'Giriş Yapılıyor. Lütfen Bekleyiniz.'
    });
    await loading.present();

    const url = this.BASE_URL+this.URL_STARTPOINT;
    this.istek.getDataLogin(url+"?isletme_no="+this.veri.isletme_no+"&sifre="+this.veri.sifre).subscribe(res=>{
    this.loginAnsReq = res;
      console.log("Tokenimiz : " +this.loginAnsReq["TOKEN"]);
      console.log(res.HATA);

      
      if(this.veri.isletme_no != null && this.veri.sifre != null)
      {
        console.log(this.loginAnsReq);
        if(res.TOKEN != null)
        {     
          this.token = res.TOKEN;
          this.storage.set('TOKEN',this.token);
          this.navController.navigateRoot('/home');
          loading.dismiss();
        }
        else{
          this.hata();
          loading.dismiss();
        }
      }
      else{
        loading.dismiss();
        this.hataNull();
      }
    },err=>{
     
        loading.dismiss();
        this.hataUnvisible();   
        
    })

    
  }

}
