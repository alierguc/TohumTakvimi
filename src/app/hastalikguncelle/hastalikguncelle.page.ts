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
  selector: 'app-hastalikguncelle',
  templateUrl: './hastalikguncelle.page.html',
  styleUrls: ['./hastalikguncelle.page.scss'],
})
export class HastalikguncellePage implements OnInit {

  hayvan_id: any;
  token: any;
  hastalik_adi: any;
  hayvanID: any;
  hastalik_tarihi: any;
  tedavi: any;
  not: any;
  tedavi_yapan: any;
  addResponse: any;
  BASE_URL="http://167.172.156.114/tohumtakvimi/";
  URL_ENDPOINT = "hastalik_guncelle.php";

  bodyData = {
    "hastalik_adi": this.hastalik_adi, "hastalik_tarihi": this.hastalik_tarihi,
    "tedavi": this.tedavi, "tedavi_yapan": this.tedavi_yapan,
    "not": this.not
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
    if (this.bodyData.hastalik_adi != null && this.bodyData.hastalik_tarihi != null
      && this.bodyData.tedavi != null && this.bodyData.tedavi_yapan != null) {
      const url = this.BASE_URL + this.URL_ENDPOINT;
      this.istek.getDataAdd(url + "?TOKEN="+this.token+"&kayit_id="+this.hayvanID+"&hastalik_adi="+this.bodyData.hastalik_adi+"&hastalik_tarihi="+this.bodyData.hastalik_tarihi+
      "&tedavi="+this.bodyData.tedavi+"&tedavi_yapan="+this.bodyData.tedavi_yapan+"&not="+this.bodyData.not).subscribe(res => {
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
  //#endregion

}


