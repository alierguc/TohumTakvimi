import { Component, OnInit, ɵConsole } from '@angular/core';
import { LoadingController,AlertController } from '@ionic/angular';
import {RequestService} from '../api/request.service';
import { Storage } from '@ionic/storage';


@Component({
  selector: 'app-hayvanbakimilist',
  templateUrl: './hayvanbakimilist.page.html',
  styleUrls: ['./hayvanbakimilist.page.scss'],
})
export class HayvanbakimilistPage implements OnInit {

  hayvan_id;
  yeniHayvanID:any;
  getTitle:any;

  token:any;
  BASE_URL="http://167.172.156.114/tohumtakvimi/";
  ENDPOINT_KIZGINLIK = "kizginlik_liste.php";
  ENDPOINT_TOHUMLAMA = "tohumlama_listesi.php";
  ENDPOINT_ASILAMA = "asi_liste.php";
  ENDPOINT_HASTALIKLAR = "hastalik_liste.php";
  ENDPOINT_LISTE = "liste.php";
  dataVar:any;
  listeData:any;
  pageTitle:any;

  constructor(private istek:RequestService,private loadingController:LoadingController,
    private alertController:AlertController,private storage:Storage) { 
    this.storage.get('TOKEN').then((val) => { 
      this.token = val;
      console.log(this.token);
      });
    this.liste(this.yeniHayvanID);

    
  }

  ngOnInit() {
    this.yeniHayvanID = `${this.hayvan_id}`;
 /*
    this.kizginlikFunc(this.yeniHayvanID);
   
    this.tohumlamaFunc(this.yeniHayvanID);

    this.AsilamalarFunc(this.yeniHayvanID);

    this.HastaliklarFunc(this.yeniHayvanID);
 
 
    this.liste(this.yeniHayvanID);
   */
  }

  async liste(kizginlik)
  {
    const url = this.BASE_URL +this.ENDPOINT_LISTE;
    this.istek.getSearchData(url+"?TOKEN="+this.token+"&hayvan_id="+kizginlik).subscribe(res=>{
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

  async tohumlamaFunc(kizginlik)
  {
    const url = this.BASE_URL +this.ENDPOINT_TOHUMLAMA;
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

  AsilamalarFunc(kizginlik)
  {
    const url = this.BASE_URL +this.ENDPOINT_ASILAMA;
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

  HastaliklarFunc(kizginlik)
  {
    const url = this.BASE_URL +this.ENDPOINT_HASTALIKLAR;
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
}
