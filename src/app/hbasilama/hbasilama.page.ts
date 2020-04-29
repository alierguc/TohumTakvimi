import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { NavController, NavParams, 
ToastController, Platform, MenuController, 
AlertController, LoadingController,ModalController } from '@ionic/angular';
import {RequestService} from '../api/request.service';
import { HayvandurumPage } from '../hayvandurum/hayvandurum.page';
import { from } from 'rxjs';
import {AsiguncellePage} from '../asiguncelle/asiguncelle.page';
import { Storage } from '@ionic/storage'

@Component({
  selector: 'app-hbasilama',
  templateUrl: './hbasilama.page.html',
  styleUrls: ['./hbasilama.page.scss'],
})
export class HbasilamaPage implements OnInit {
  hayvan_id;
  hbAsilama:any;

  controlData:boolean;

  token:any;
  BASE_URL="http://167.172.156.114/tohumtakvimi/";
  ENDPOINT_ASILAMA = "asi_liste.php";
  ENDPOINT_ASI_SIL = "asi_sil.php";

  dataVar:any;
  constructor(private router:ActivatedRoute,private route:Router,private navCtrl:NavController,
    private modalCtrl:ModalController,private istek:RequestService,private alertController:AlertController,
    private storage:Storage) {
      this.storage.get('TOKEN').then((val) => { 
        this.token = val;
        console.log(this.token);
        this.kizginlikFunc(this.hbAsilama);
        });
     }

  ngOnInit() {
    this.hbAsilama = `${this.hayvan_id}`;
    
    this.storage.get('TOKEN').then((val) => { 
      this.token = val;
      console.log(this.token);
      this.kizginlikFunc(this.hbAsilama);
      });
  }

  async kizginlikFunc(kizginlik)
  {
    
      const url = this.BASE_URL +this.ENDPOINT_ASILAMA;
      this.istek.getSearchData(url+"?TOKEN="+this.token+"&hayvan_id="+kizginlik).subscribe(res=>{
        
        this.dataVar = res;

        
        console.log(this.dataVar);
        if(res == null)
        {
          this.controlData = false;
        }
        else{
          console.log("Null dönmedi");
        }
      },err=>{

      });

     
  }
  async asilamaSil(idParam)
  {
    console.log(idParam);
    const url = this.BASE_URL +this.ENDPOINT_ASI_SIL;
    this.istek.getSearchData(url+"?TOKEN="+this.token
    +"&asi_id="+idParam).subscribe(res=>{
      
      this.dataVar = res;
      console.log(res.HATA);
      if(res != null)
      {
        if(res.HATA == "0")
        {
          
          this.kizginlikFunc(this.hbAsilama);
          
        }
        else{
         
          this.hataModal();
        }
      }
      else{
        
      }   
      console.log(this.dataVar);
      
    },err=>{

    });

  }
  async bilgiDuzenle(paramHayvan) {
    const modal = await this.modalCtrl.create({
      component: AsiguncellePage,
      cssClass:'custom-modal',
      componentProps: { 
        hayvan_id: paramHayvan
      
      }

    });
    return await modal.present();
  }
  async islemModal() {
    const alert = await this.alertController.create({
      subHeader: 'Uyarı',
      message: 'İşlem başarılı.',
      buttons: ['Tamam']
    });

    await alert.present();
  }
  async hataModal() {
    const alert = await this.alertController.create({
      subHeader: 'Uyarı',
      message: 'Belirlenemeyen bir hata oluştu.',
      buttons: ['Tamam']
    });

    await alert.present();
  }
}