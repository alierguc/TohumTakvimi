import { Component, OnInit } from '@angular/core';
import { LoadingController,AlertController,ModalController } from '@ionic/angular';
import { from } from 'rxjs';
import {RequestService} from '../api/request.service';
import { Storage } from '@ionic/storage';
import {IsletmedencikarmodalPage} from '../isletmedencikarmodal/isletmedencikarmodal.page';
@Component({
  selector: 'app-hayvanara',
  templateUrl: './hayvanara.page.html',
  styleUrls: ['./hayvanara.page.scss'],
})
export class HayvanaraPage implements OnInit {

  
  BASE_URL="http://167.172.156.114/tohumtakvimi/";
  URL_ENDPOINT = "hayvan_ara.php";
  URL_EXTRAPOINT = "hayvan_sil.php";
  URL_ISLETMECIKAR = "isletme_cikar.php";

  kupeNumarası:any;
  token:any;
  
  
  kalan_gun:any;
  son_tarih:any;
  kullanici_not:any;

  buzagi:any;
  kupe_numarasi:any;
  hayvan_adi:any;
  boga_kupe:any;
  anne_kupe:any;
  dogum_tarihi:any;
  gelis_tarihi:any;
  irk_adi:any;
  cinsiyet:any;
  not_icerik:any;
  id:any;


  kontrolCard:boolean;
  kontrolProgress:boolean;
  responseDeleteData:any;
  responseSearchData:any;
  bodyData = { 
    "kupe_numarasi": this.kupe_numarasi}
  constructor(private loadingController:LoadingController,private alertController:AlertController,
    private istek:RequestService,private storage:Storage,private modalController:ModalController) { 
      this.kontrolCard = false;
      this.kontrolProgress = false;
      this.storage.get('TOKEN').then((val) => { 
        this.token = val;
        console.log(this.token);
        });
    }

  ngOnInit() {
  }

  async isletmedenCikar() {
    const modal = await this.modalController.create({
      component: IsletmedencikarmodalPage,
      cssClass:'custom-modal',
      componentProps: { 
        hayvan_id: this.id
       
      }
    });
    return await modal.present();
  }


  //#region Istekler
  /*
async isletmedenCikar()
{
    const loading = await this.loadingController.create({
      message: 'İşleminiz gerçekleştiriliyor, lütfen bekleyiniz.',
    });
    await loading.present();
    const url = this.BASE_URL+this.URL_EXTRAPOINT;
    this.istek.getDataDelete(url+"?kupe_numarasi="+this.bodyData.kupe_numarasi+"&TOKEN="+"bkZocmFkYmxwMjgxRHcrdlF6dSs0ODlZOGd1eDJzV01wZ01MNnhjZUJBdnlUdnB6azZsU1JFd2YxV1R6K0Fib1FXY1o2Zk5nOTdIdGwrdWVQaTMybmJBQkJaWVFTem9wZ0ovTjNjdkpUQlJKYVE2RUhhUkppdz09").subscribe(res=>{
      this.responseDeleteData = res;
      
      if(this.responseDeleteData == "NONE")
      {
        this.kontrolCard = false;
      }
      console.log(this.responseDeleteData);
      this.silModal();
      loading.dismiss();
    },err=>{
      this.araHata();
      loading.dismiss();
    })
}
*/
async searchData()
{
   
    const url = this.BASE_URL+this.URL_ENDPOINT;
    if(this.bodyData.kupe_numarasi != null)
    {
    this.istek.getSearchData(url+"?kupe_numarasi="+this.bodyData.kupe_numarasi+"&TOKEN="+this.token).subscribe(res=>{
      this.responseSearchData = res;
      console.log(this.responseSearchData);
      if(this.responseSearchData["BILGI"] == "NONE")
      {
        this.kontrolCard = false;
        this.kontrolProgress = false;
        this.araHata();
     
      }
      else{

        this.kontrolProgress = false;
        this.kontrolCard = true;

        this.id = this.responseSearchData[0]["ID"]
        this.buzagi = this.responseSearchData[0]["BUZAGI"]
        this.kupe_numarasi = this.responseSearchData[0]["KUPE_NUMARASI"]
        this.hayvan_adi = this.responseSearchData[0]["HAYVAN_ADI"]
        this.boga_kupe = this.responseSearchData[0]["BOGA_KUPE"]
        this.anne_kupe = this.responseSearchData[0]["ANNE_KUPE"]
        this.kullanici_not = this.responseSearchData[0]["NOT_ICERIK"]
        this.dogum_tarihi = this.responseSearchData[0]["DOGUM_TARIHI"]
        this.gelis_tarihi = this.responseSearchData[0]["GELIS_TARIHI"]
        this.irk_adi = this.responseSearchData[0]["IRK_ADI"]
        this.cinsiyet = this.responseSearchData[0]["CINSIYET"]
        this.not_icerik = this.responseSearchData[0]["NOT_ICERIK"]
        
      }
      
    },err=>{
      this.silHata();
   
    })
    this.kontrolCard = false;
    this.kontrolProgress = false;
  }
  else{
    this.nullValue();
    this.kontrolCard = false;
    this.kontrolProgress = false;
  }
}

//#endregion


  //#region Modallar
 
  async silModal() {
    const alert = await this.alertController.create({
      subHeader: 'Uyarı',
      message: 'İşlem başarılı.',
      buttons: ['Tamam']
    });

    await alert.present();
  }

  async nullValue() {
    const alert = await this.alertController.create({
      subHeader: 'Uyarı',
      message: 'Lütfen küpe numarasını boş bırakmayınız.',
      buttons: ['Tamam']
    });

    await alert.present();
  }

  async araHata() {
    const alert = await this.alertController.create({
      subHeader: 'Uyarı',
      message: 'Böyle bir kayıt bulunamamaktadır.',
      buttons: ['Tamam']
    });

    await alert.present();
  }

  async silHata() {
    const alert = await this.alertController.create({
      subHeader: 'Uyarı',
      message: 'Belirlenemeyen bir hata oluştu.',
      buttons: ['Tamam']
    });

    await alert.present();
  }
 //#endregion

}
