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
  selector: 'app-kizginlikguncelle',
  templateUrl: './kizginlikguncelle.page.html',
  styleUrls: ['./kizginlikguncelle.page.scss'],
})
export class KizginlikguncellePage implements OnInit {
  hayvan_id: any;
  token: any;
  tartim_tarihi: any;
  hayvanID: any;
  kg: any;
  tedavi: any;
  not: any;
  tedavi_yapan: any;
  kizginlik_tarihi:any;
  addResponse: any;
  BASE_URL="http://167.172.156.114/tohumtakvimi/";
  URL_ENDPOINT = "kizginlik_guncelle.php";

  bodyData = {
    "kizginlik_tarihi": this.kizginlik_tarihi,"not": this.not
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
    if (this.bodyData.kizginlik_tarihi != null) {
      const url = this.BASE_URL + this.URL_ENDPOINT;
      this.istek.getDataAdd(url + "?TOKEN="+this.token+"&kayit_id="+this.hayvanID+"&kizginlik_tarihi="+this.bodyData.kizginlik_tarihi+
      "&not="+this.bodyData.not).subscribe(res => {
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
    console.log("Hastaliktaki ID : " + this.hayvanID);
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

}
