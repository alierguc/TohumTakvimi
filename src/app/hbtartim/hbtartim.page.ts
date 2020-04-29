import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { NavController, NavParams, 
ToastController, Platform, MenuController, 
AlertController, LoadingController,ModalController } from '@ionic/angular';
import {RequestService} from '../api/request.service';
import { TartimguncellePage } from '../tartimguncelle/tartimguncelle.page';
import { from } from 'rxjs';
import { Storage } from '@ionic/storage'

@Component({
  selector: 'app-hbtartim',
  templateUrl: './hbtartim.page.html',
  styleUrls: ['./hbtartim.page.scss'],
})
export class HbtartimPage implements OnInit {

  hbTartim:any;
  hayvan_id;

  token:any;
  BASE_URL="http://167.172.156.114/tohumtakvimi/";
  ENDPOINT_TARTIM = "tartim_listesi.php";

  ENDPOINT_TARTIM_SIL="tartim_sil.php"

  dataVar:any;

  constructor(private router:ActivatedRoute,private route:Router,private navCtrl:NavController,
    private modalCtrl:ModalController,private istek:RequestService,private alertController:AlertController,
    private storage:Storage) {
      this.storage.get('TOKEN').then((val) => { 
        this.token = val;
        console.log(this.token);
        this.tartimFunc(this.hbTartim);
        });
     }

  ngOnInit() {
    this.hbTartim = `${this.hayvan_id}`;
    
    this.storage.get('TOKEN').then((val) => { 
      this.token = val;
      console.log(this.token);
      this.tartimFunc(this.hbTartim);
      });
  }
  async bilgiDuzenle(paramHayvan) {
    const modal = await this.modalCtrl.create({
      component: TartimguncellePage,
      cssClass:'custom-modal',
      componentProps: { 
        hayvan_id: paramHayvan
      
      }

    });
    return await modal.present();
  }
  async tartimFunc(tartimID)
  {
    
      const url = this.BASE_URL +this.ENDPOINT_TARTIM;
      this.istek.getSearchData(url+"?TOKEN="+this.token
      +"&hayvan_id="+tartimID).subscribe(res=>{
        this.dataVar = res;
        console.log(res);
        if(res == null)
        {
          console.log("Null döndü");
        }
        else{
          console.log("Null dönmedi");
        }
      },err=>{

      });

     
  }
  async hastalikSil(idParam)
  {
    console.log(idParam);
    const url = this.BASE_URL +this.ENDPOINT_TARTIM_SIL;
    this.istek.getSearchData(url+"?TOKEN="+this.token
    +"&tartim_id="+idParam).subscribe(res=>{
      
      this.dataVar = res;
      console.log(res.HATA);
      if(res != null)
      {
        if(res.HATA == "0")
        {
  
          this.tartimFunc(this.hbTartim);
          
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
