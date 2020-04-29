import { Component } from '@angular/core';
import { Platform,AlertController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';
import { OneSignal } from '@ionic-native/onesignal/ngx';
import { from, throwError } from 'rxjs';
import { Storage } from '@ionic/storage';
import { HTTP } from '@ionic-native/http';
import {RequestService} from './api/request.service';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})

export class AppComponent {
  public appPages = [
    {
      title: 'İşletme Bilgileri',
      url: '/isletmebilgileri',
      icon: 'business'
    },
    {
      title: 'İşletmede olmayanlar',
      url: '/isletmeolmayanlar',
      icon: 'close-circle'
    },
    {
      title: 'Veteriner Hekim Bilgileri',
      url: '/veteriner',
      icon: 'medkit'
    },
    {
      title: 'Günlük Süt',
      url: '/gsut',
      icon: 'pint'
    }
  ];

  public appPagesTwo = [
    {
      title: 'Son kayıt',
      url: '/home',
      icon: 'save'
    },
    {
      title: 'Hayvanlar',
      url: '/hayvanlar',
      icon: 'list'
    },
    {
      title: 'Hayvan Ekle',
      url: '/hayvanekle',
      icon: 'add-circle-outline'
    },
    {
      title: 'Tohumlama Listesi',
      url: '/tohumlamahayvanliste',
      icon: 'list-box'
    },
    {
      title: 'Hayvan Ara',
      url: '/hayvanara',
      icon: 'search'
    }
  ];
  public appPagesThree = [
    {
      title: 'Kullanım Kılavuzu',
      url: '/kullanimk',
      icon: 'document'
    },
    {
      title: 'Hakkımızda',
      url: '/kullanimk',
      icon: 'information-circle'
    }
  ];
  dataVar:any;
  token:any;
  player_id:any;
  player_id_req:any;
  tokenControl:any;

  constructor(
    private router:Router,
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private oneSignal: OneSignal,
    private alertCtrl:AlertController,
    private storage:Storage,
    private http: HTTP,
    private istek:RequestService
 

 
  ) {
    this.initializeApp();
  }
  async showAlert(title, msg, task) {
    const alert = await this.alertCtrl.create({
      header: title,
      subHeader: msg,
      buttons: [
        {
          text: `Action: ${task}`,
          handler: () => {
            // E.g: Navigate to a specific screen
          }
        }
      ]
    })
    alert.present();
  }


  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      ////
      this.oneSignal.startInit('5ab4e16f-41f4-4647-8d47-edaba96465e1', '489463692693');

      this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.None);
  
      // Notifcation was received in general
      this.oneSignal.handleNotificationReceived().subscribe(data => {
        let msg = data.payload.body;
        let title = data.payload.title;
        let additionalData = data.payload.additionalData;
        this.showAlert(title, msg, additionalData.task);
      });
  
      // Notification was really clicked/opened
      this.oneSignal.handleNotificationOpened().subscribe(data => {
        // Just a note that the data is a different place here!
        let additionalData = data.notification.payload.additionalData;
  
        this.showAlert('Notification opened', 'You already read this before', additionalData.task);
      });
  
      this.oneSignal.endInit();
      this.oneSignal.getIds().then((id) => { 
        this.storage.set('PLAYER_ID',id.userId);
       
        const  BASE_URL="http://167.172.156.114/tohumtakvimi/";
        const END_POINT ="player.php";
    
        const url = BASE_URL+END_POINT;
        this.istek.getDataHome(url+"?TOKEN="+this.token+"&player_id="+id.userId).subscribe(res=>{
        },err=>{
    
            console.log(err); 
            
          })         
       
        
      });

      this.storage.get('TOKEN').then((val) => { 
        //this.setupPush();
        if(val != null)
        {
          this.router.navigateByUrl('home');
       
        }
        else{
          this.router.navigateByUrl('loginpage');
        
        }
      });
    
     
    });
  }
}
