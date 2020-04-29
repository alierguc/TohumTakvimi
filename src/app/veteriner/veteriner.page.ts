import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import {HekimmodalPage} from '../hekimmodal/hekimmodal.page';
import { Router } from '@angular/router';
import { LoadingController,AlertController } from '@ionic/angular';
import {RequestService} from '../api/request.service';
import { Storage } from '@ionic/storage';
@Component({
  selector: 'app-veteriner',
  templateUrl: './veteriner.page.html',
  styleUrls: ['./veteriner.page.scss'],
})
export class VeterinerPage implements OnInit {
 
  
  BASE_URL="http://167.172.156.114/tohumtakvimi/";
  URL_ENDPOINT = "hekim_listesi.php";
  URL_SIL_POINT = "hekim_sil.php";

  id:any;
  dataVar:any;
  silKontrol:any;
  token:any;
  veriKontrol:any;
  constructor(private modalController:ModalController,private router:Router,private istek:RequestService,private storage:Storage) {
    this.storage.get('TOKEN').then((val) => { 
      this.token = val;
      console.log("İşletmede olmayanlar token : " +this.token);
  
      });
   }

  ngOnInit() {
  }
  async veterinerEkle() {
    const modal = await this.modalController.create({
      component: HekimmodalPage,
      cssClass: 'custom-modal'
      
    });
    return await modal.present();
  }

  async VeriGetir()
  {
   
    const url = this.BASE_URL+this.URL_ENDPOINT;
    this.istek.getDataHome(url+"?TOKEN="+this.token).subscribe(res=>{
    this.dataVar =res;
      console.log(this.dataVar);
    },err=>{

        console.log(err); 
        
      })
  }
  async veriSil(param)
  {
   
    const url = this.BASE_URL+this.URL_SIL_POINT;
    this.istek.getDataHome(url+"?TOKEN="+this.token
    +"&hekim_id="+param
    ).subscribe(res=>{
    this.silKontrol =res;
    if(res.HATA == "0")
    {
      this.veriKontrol = true;
      this.VeriGetir();
      console.log("Oldu");
    }
    else{
      console.log("Olmadı");
    }
    if(res.BILGI == "NONE")
    {
      this.veriKontrol = false;
    }
   
      console.log(this.silKontrol);
    },err=>{

        console.log(err); 
        
      })
  }
}
