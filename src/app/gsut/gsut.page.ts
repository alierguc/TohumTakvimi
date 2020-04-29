import { Component, OnInit } from '@angular/core';
import { LoadingController,AlertController,ModalController } from '@ionic/angular';
import {SutmodalPage} from '../sutmodal/sutmodal.page';
import {RequestService} from '../api/request.service';
import { Storage } from '@ionic/storage';
import {SutlistemodalPage} from '../sutlistemodal/sutlistemodal.page';
@Component({
  selector: 'app-gsut',
  templateUrl: './gsut.page.html',
  styleUrls: ['./gsut.page.scss'],
})
export class GsutPage implements OnInit {

  token:any;
  constructor(private modalCtrl:ModalController,private loadingController:LoadingController,
    private alertController:AlertController,public istek:RequestService,private storage:Storage) {
      this.storage.get('TOKEN').then((val) => { 
        this.token = val;
        console.log(this.token);
        this.veriCek();
        });
     }

  ngOnInit() {
    
  }
  
  BASE_URL="http://167.172.156.114/tohumtakvimi/";
  URL_ENDPOINT = "sut_bilgileri.php";
  URL_SUT_SIL = "sut_sil.php";
  getData:any;
  toplam_litre:any;
  toplam_fiyat:any;
  secondData:any;
  
    async veriCek()
    {
  
      const url = this.BASE_URL+this.URL_ENDPOINT;
      this.istek.getDataAdd(url+"?TOKEN="+this.token).subscribe(res=>{
        this.getData = res;

        this.toplam_fiyat = this.getData.GENEL_BILGI[0].TOPLAM_FIYAT;
        this.toplam_litre = this.getData.GENEL_BILGI[0].TOPLAM_LITRE;

        this.secondData = this.getData.SUT_LISTESI;
     
        },err=>{
          console.log(err);
        })
      }
   
   
   
      async sutSil(param)
      {
        const url = this.BASE_URL+this.URL_SUT_SIL;
        this.istek.getDataAdd(url+"?TOKEN="+this.token+"&sut_id="+param).subscribe(res=>{
          this.getData = res;
  
          if(res.HATA == "0")
          {
            this.veriCek();
          }
          else{
            console.log("Hata");
          }
          console.log(this.getData);
       
          },err=>{
            console.log(err);
          })
      }

  async sutEkle() {
    const modal = await this.modalCtrl.create({
      component: SutmodalPage,
      cssClass: 'custom-modal'
    });
    return await modal.present();
  }
  async sutListe() {
    const modal = await this.modalCtrl.create({
      component: SutlistemodalPage,
      cssClass: 'custom-modal'
    });
    return await modal.present();
  }
}
