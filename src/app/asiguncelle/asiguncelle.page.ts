import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import {
  NavController, NavParams,
  ToastController, Platform, MenuController,
  AlertController, LoadingController, ModalController
} from '@ionic/angular';
import { RequestService } from '../api/request.service';
import { HayvandurumPage } from '../hayvandurum/hayvandurum.page';
import { from } from 'rxjs';
import { Storage } from '@ionic/storage'

@Component({
  selector: 'app-asiguncelle',
  templateUrl: './asiguncelle.page.html',
  styleUrls: ['./asiguncelle.page.scss'],
})
export class AsiguncellePage implements OnInit {
  hayvan_id: any;
  token: any;
  asi_adi: any;
  hayvanID: any;
  kg: any;
  asi_yapan:any; 
  asi_tarihi:any;
  tedavi: any;
  not: any;
  tedavi_yapan: any;
  addResponse: any;
  BASE_URL="http://167.172.156.114/tohumtakvimi/";
  URL_ENDPOINT = "asi_guncelle.php";

  bodyData = {
    "asi_adi": this.asi_adi,"not": this.not,"asi_yapan":this.asi_yapan,"asi_tarihi":this.asi_tarihi
  };
  constructor(private router: ActivatedRoute, private route: Router, private navCtrl: NavController,
    private modalCtrl: ModalController, private istek: RequestService, private alertController: AlertController,
    private storage: Storage, private loadingController: LoadingController, ) {

    this.storage.get('TOKEN').then((val) => {
      this.token = val;
      console.log("Token : " + this.token);
    });

  }
  async hastalikGuncelleme() {
    const loading = await this.loadingController.create({
      message: 'İşleminiz gerçekleştiriliyor, lütfen bekleyiniz.'
    });
    await loading.present();
    if (this.bodyData.asi_adi != null && this.bodyData.asi_yapan != null) {
      const url = this.BASE_URL + this.URL_ENDPOINT;
      this.istek.getDataAdd(url + "?TOKEN="+this.token+"&asi_adi="+this.bodyData.asi_adi+"&kayit_id="+this.hayvanID+"&not="+this.bodyData.not+"&asi_tarihi="+this.bodyData.asi_tarihi+"&asi_yapan="+this.bodyData.asi_yapan).subscribe(res => {
        this.addResponse = res;
        if (res.HATA == "0") {
          this.basariliModal();
          loading.dismiss();
        }
        else {
          this.ekleHata();
          loading.dismiss();
        }
      }, err => {
        this.ekleHata();
        loading.dismiss();
      })
    }
    else {
      this.nullValue();
      loading.dismiss();
    }
    loading.dismiss();
  }
  ngOnInit() {
    this.hayvanID = `${this.hayvan_id}`;
    console.log("Aşı güncelle ID : " + this.hayvanID);
  }
  //#region Modallar
  async ekleHata() {
    const alert = await this.alertController.create({
      subHeader: 'Uyarı',
      message: 'Belirlenemeyen bir hata oluştu.',
      buttons: ['Tamam']
    });

    await alert.present();
  }
  async nullValue() {
    const alert = await this.alertController.create({
      subHeader: 'Uyarı',
      message: 'Lütfen bilgileri eksiksiz giriniz.',
      buttons: ['Tamam']
    });

    await alert.present();
  }


  async basariliModal() {
    const alert = await this.alertController.create({
      subHeader: 'Uyarı',
      message: 'İşleminiz Başarılı.',
      buttons: ['Tamam']
    });

    await alert.present();
  }
  //#endregion

}


