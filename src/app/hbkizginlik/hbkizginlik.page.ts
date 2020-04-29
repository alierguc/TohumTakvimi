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
import { KizginlikguncellePage } from '../kizginlikguncelle/kizginlikguncelle.page';

@Component({
  selector: 'app-hbkizginlik',
  templateUrl: './hbkizginlik.page.html',
  styleUrls: ['./hbkizginlik.page.scss'],
})
export class HbkizginlikPage implements OnInit {
  hayvan_id;
  hbKizginlikId:any;

  token:any;
  BASE_URL="http://167.172.156.114/tohumtakvimi/";
  ENDPOINT_KIZGINLIK = "kizginlik_liste.php";
  ENDPOINT_KIZGINLIK_SIL="kizginlik_sil.php";

  dataVar:any;

  constructor(private router:ActivatedRoute,private route:Router,private navCtrl:NavController,
    private modalCtrl:ModalController,private istek:RequestService,private alertController:AlertController,
    private storage:Storage) {
      this.storage.get('TOKEN').then((val) => { 
        this.token = val;
        console.log(this.token);
        this.kizginlikFunc(this.hbKizginlikId);
        });
     }

  ngOnInit() {
    this.hbKizginlikId = `${this.hayvan_id}`;
    
    this.storage.get('TOKEN').then((val) => { 
      this.token = val;
      console.log(this.token);
      this.kizginlikFunc(this.hbKizginlikId);
      });
  }
  async bilgiDuzenle(paramHayvan) {
    const modal = await this.modalCtrl.create({
      component: KizginlikguncellePage,
      cssClass:'custom-modal',
      componentProps: { 
        hayvan_id: paramHayvan
      
      }

    });
    return await modal.present();
  }
  async kizginlikFunc(kizginlik)
  {
      
      const url = this.BASE_URL +this.ENDPOINT_KIZGINLIK;
      this.istek.getSearchData(url+"?TOKEN="+this.token+"&hayvan_id="+kizginlik).subscribe(res=>{
        
        this.dataVar = res;

        
        console.log(this.dataVar);
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
  async kizginlikSil(idParam)
  {
    console.log("KIZGINLIK İD : "+ idParam);
    const url = this.BASE_URL +this.ENDPOINT_KIZGINLIK_SIL;
    this.istek.getSearchData(url+"?TOKEN="+this.token+"&kizginlik_id="+idParam).subscribe(res=>{
      
      this.dataVar = res;
      console.log(res.HATA);
      this.kizginlikFunc(this.hbKizginlikId);
      
    },err=>{

    });

  }
}
