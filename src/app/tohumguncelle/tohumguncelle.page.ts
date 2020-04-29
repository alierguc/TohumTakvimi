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
  selector: 'app-tohumguncelle',
  templateUrl: './tohumguncelle.page.html',
  styleUrls: ['./tohumguncelle.page.scss'],
})
export class TohumguncellePage implements OnInit {
  hayvan_id: any;
  token: any;
  boga_kupe: any;
  hayvanID: any;
  boga_adi: any;
  tedavi: any;
  not: any;
  tohumlama_tarihi:any;
  tedavi_yapan: any;
  tohumlama_yapan:any;
  addResponse: any;
  BASE_URL="http://167.172.156.114/tohumtakvimi/";
  URL_ENDPOINT = "tohumlama_guncelle.php";

  bodyData = {
    "boga_kupe": this.boga_kupe, "boga_adi": this.boga_adi,"not": this.not,"tohumlama_tarihi":this.tohumlama_tarihi,"tohumlama_yapan":this.tohumlama_yapan
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
    if (this.bodyData.boga_kupe != null && this.bodyData.boga_adi != null && this.bodyData.tohumlama_tarihi != null) {
      const url = this.BASE_URL + this.URL_ENDPOINT;
      this.istek.getDataAdd(url + "?TOKEN="+this.token+"&kayit_id="+this.hayvanID+"&boga_kupe="+this.bodyData.boga_kupe+"&boga_adi="+this.bodyData.boga_adi+
      "&not="+this.bodyData.not+"&tohumlama_tarihi="+this.bodyData.tohumlama_tarihi+"&tohumlama_yapan="+this.bodyData.tohumlama_yapan).subscribe(res => {
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
