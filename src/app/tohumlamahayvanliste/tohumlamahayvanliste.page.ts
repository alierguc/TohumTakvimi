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

@Component({
  selector: 'app-tohumlamahayvanliste',
  templateUrl: './tohumlamahayvanliste.page.html',
  styleUrls: ['./tohumlamahayvanliste.page.scss'],
})
export class TohumlamahayvanlistePage implements OnInit {
  hbTohumlama:any;
  hayvan_id;

  hexColor:string
  hexColorCard:string;
  token:any;
  BASE_URL="http://167.172.156.114/tohumtakvimi/";
  ENDPOINT_TOHUMLAMA = "hayvanlar_tohumlama_listesi.php";

  cardColor:any;
  dataVar:any;

  constructor(private router:ActivatedRoute,private route:Router,private navCtrl:NavController,
    private modalCtrl:ModalController,private istek:RequestService,private alertController:AlertController,
    private storage:Storage) {
      this.storage.get('TOKEN').then((val) => { 
        this.token = val;
        this.tohumlamaFunc(this.hbTohumlama);
        console.log(this.token);
        });
     }

  ngOnInit() {
    this.hbTohumlama = `${this.hayvan_id}`;
    this.storage.get('TOKEN').then((val) => { 
      this.token = val;
      this.tohumlamaFunc(this.hbTohumlama);
      console.log(this.token);
      });
  }

  async tohumlamaFunc(tohumlamaID)
  {
    
      const url = this.BASE_URL +this.ENDPOINT_TOHUMLAMA;
      this.istek.getSearchData(url+"?TOKEN="+this.token
      +"&hayvan_id="+tohumlamaID).subscribe(res=>{
        
        this.dataVar = res;
     

        console.log(this.dataVar);
        console.log("Yazı Rengi : "+this.dataVar[0].YAZI_RENK);
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