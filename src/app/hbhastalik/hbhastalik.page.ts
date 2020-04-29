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
import {HastalikguncellePage} from '../hastalikguncelle/hastalikguncelle.page';
@Component({
  selector: 'app-hbhastalik',
  templateUrl: './hbhastalik.page.html',
  styleUrls: ['./hbhastalik.page.scss'],
})
export class HbhastalikPage implements OnInit {
  hayvan_id;
  hbHastalik:any;

  token:any;
  BASE_URL="http://167.172.156.114/tohumtakvimi/";
  ENDPOINT_HASTALIK = "hastalik_liste.php";

  ENDPOINT_HASTALIK_SIL = "hastalik_sil.php";

  dataVar:any;
  constructor(private router:ActivatedRoute,private route:Router,private navCtrl:NavController,
    private modalCtrl:ModalController,private istek:RequestService,private alertController:AlertController,
    private storage:Storage) {
      this.storage.get('TOKEN').then((val) => { 
        this.token = val;
        console.log(this.token);
        this.hastalikFunc(this.hbHastalik);
        });
     }

 
  ngOnInit() {
    this.hbHastalik = `${this.hayvan_id}`;
    this.storage.get('TOKEN').then((val) => { 
      this.token = val;
      console.log(this.token);
      this.hastalikFunc(this.hbHastalik);
      });
  }
  async bilgiDuzenle(paramHayvan) {
    const modal = await this.modalCtrl.create({
      component: HastalikguncellePage,
      cssClass:'custom-modal',
      componentProps: { 
        hayvan_id: paramHayvan
      
      }

    });
    return await modal.present();
  }
  async hastalikFunc(hastalikID)
  {
    
      const url = this.BASE_URL +this.ENDPOINT_HASTALIK;
      this.istek.getSearchData(url+"?TOKEN="+this.token+"&hayvan_id="+hastalikID).subscribe(res=>{
        
        this.dataVar = res;

        
        console.log(this.dataVar);
    
      },err=>{

      });

     
  }

  async hastalikSil(idParam)
  {
    console.log(idParam);
    const url = this.BASE_URL +this.ENDPOINT_HASTALIK_SIL;
    this.istek.getSearchData(url+"?TOKEN="+this.token+"&hastalik_id="+idParam).subscribe(res=>{
      
      this.dataVar = res;
      console.log(res.HATA);
      if(res != null)
      {
        if(res.HATA == "0")
        {
  
          this.hastalikFunc(this.hbHastalik);
          
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