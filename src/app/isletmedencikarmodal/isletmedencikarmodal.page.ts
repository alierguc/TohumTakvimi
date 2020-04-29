import { Component, OnInit } from '@angular/core';
import { LoadingController,AlertController,ModalController } from '@ionic/angular';
import { from } from 'rxjs';
import {RequestService} from '../api/request.service';
import { Storage } from '@ionic/storage';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-isletmedencikarmodal',
  templateUrl: './isletmedencikarmodal.page.html',
  styleUrls: ['./isletmedencikarmodal.page.scss'],
})
export class IsletmedencikarmodalPage implements OnInit {
  hayvan_id;
  getValue:any;
  cikis_tarihi:any;
  cikis_nedeni:any;
  token:any;

  resData:any;

  bodyData = { 
    "cikis_tarihi": this.cikis_tarihi, "cikis_nedeni": this.cikis_nedeni};

  constructor(private loadingController:LoadingController,private alertController:AlertController,
    private istek:RequestService,private storage:Storage,private modalController:ModalController) {
      this.storage.get('TOKEN').then((val) => { 
        this.token = val;
        console.log(this.token);
  
        });
     }
    
     BASE_URL="http://167.172.156.114/tohumtakvimi/";
    URL_ENDPOINT = "isletmeden_cikar.php";

  ngOnInit() {
    this.getValue = `${this.hayvan_id}`;
    console.log("hayvan idmiz : "+ this.getValue);
  }
 
  async isletmedenCikar()
  {
    const loading = await this.loadingController.create({
      message: 'İşleminiz gerçekleştiriliyor, lütfen bekleyiniz.',
    });
    await loading.present();
    const url = this.BASE_URL+this.URL_ENDPOINT;
    this.istek.getDataDelete(url+"?hayvan_id="+this.getValue+"&TOKEN="+this.token+
    "&cikis_tarihi="+this.bodyData.cikis_tarihi+"&cikis_nedeni="+this.bodyData.cikis_nedeni).subscribe(res=>{
     
      this.resData = res;
      
      if(this.resData["HATA"] == "0")
      {
        this.correct();
      }
      else{
        this.error();
      }
  
     
      loading.dismiss();
    },err=>{
      this.error();
      loading.dismiss();
    })
  }

  async correct() {
    const alert = await this.alertController.create({
      subHeader: 'Uyarı',
      message: 'İşlem başarılı.',
      buttons: ['Tamam']
    });

    await alert.present();
  }
  async error() {
    const alert = await this.alertController.create({
      subHeader: 'Uyarı',
      message: 'Belirlenemeyen bir hata oluştu.',
      buttons: ['Tamam']
    });

    await alert.present();
  }
  

}
