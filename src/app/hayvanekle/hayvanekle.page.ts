import { Component, OnInit, ɵConsole } from '@angular/core';
import { LoadingController,AlertController } from '@ionic/angular';
import {RequestService} from '../api/request.service';
import { Storage } from '@ionic/storage';


@Component({
  selector: 'app-hayvanekle',
  templateUrl: './hayvanekle.page.html',
  styleUrls: ['./hayvanekle.page.scss'],
})
export class HayvaneklePage implements OnInit {

  token:any;
  kupe_numarasi:string;
  baslangic_tarihi:string;
  bitis_tarihi:string;
  kullanici_not:string;
  hayvan_adi:string;
  dogum_tarihi:string;
  gelis_tarihi:any;
  boga_kupe:any;
  anne_kupe:any;
  cinsiyet:boolean;
  not:any;

  sayac:any;
  buzagi:boolean;
  buzagiKontrol:any;
  irkData:any;
  cinsiyetKontrol:any;
  yeniDeger:Array<any>;
  eskiDeger:any[];
  irk_adi_ekle:any;
  irkAdi:any;
  saltDeger:any;

  deger:boolean;

  lastFor:any;
  public selectID: any = [];
 
  BASE_URL="http://167.172.156.114/tohumtakvimi/";
  URL_ENDPOINT = "hayvan_ekle.php";
  URL_IRK_EKLE = "irk_ekle.php";
  URL_IRK_LISTELE = "irk_listesi.php";
  selectcategory:any;
  addResponse:any;

  bodyData = { 
    "kupe_numarasi": this.kupe_numarasi, "hayvan_adi": this.hayvan_adi, 
    "dogum_tarihi": this.dogum_tarihi, "gelis_tarihi": this.gelis_tarihi,
    "boga_kupe": this.boga_kupe,"anne_kupe": this.anne_kupe,"cinsiyet": this.cinsiyet,
    "not": this.not,"buzagi":this.buzagi,"irk_adi":this.irkAdi};

    irkDatas = {
      "irk_adi_ekle":this.irk_adi_ekle
    }
 
  constructor(private loadingController:LoadingController,
              private alertController:AlertController,public istek:RequestService,private storage:Storage) {
                this.storage.get('TOKEN').then((val) => { 
                  this.token = val;
                  console.log(this.token);
                  this.irkListele();
                  });

               }

  ngOnInit() {
    this.irkListele();
    this.storage.get('TOKEN').then((val) => { 
      this.token = val;
      console.log(this.token);
      });
  }

  
  async irkEkle()
  {
    const url = this.BASE_URL+this.URL_IRK_EKLE;
    this.istek.getSearchData(url+"?TOKEN="+this.token+"&irk_adi="+this.irkDatas.irk_adi_ekle).subscribe(res=>{
      this.irkData = res;
      console.log(this.irkData);
      if(res["HATA"] == "0"){
        this.irkListele();
        this.basariliModal();
      }
      else if(res["HATA"] == "1")
      {
        this.irkModalHata();
      }
    },err=>{
   
    })
  }
 
  async irkListele()
  {
    const url = this.BASE_URL+this.URL_IRK_LISTELE;
    this.istek.getSearchData(url+"?TOKEN="+this.token).subscribe(res=>{
    this.eskiDeger = res;
    this.irkAdi= res;
    console.log(this.yeniDeger);
    },err=>{
   
    })
  }
 
  cinsiyetKontrolFunc()
  {
    console.log(this.bodyData.cinsiyet);
  }
  updateDeger() {
  
    this.buzagiKontrol = 0;
   
    if(this.deger == true)
    {
      this.buzagiKontrol = 1;
    }
    else{
      this.buzagiKontrol = 0;
    }

  }
  async requestAdd()
  {
    const loading = await this.loadingController.create({
      message: 'İşleminiz gerçekleştiriliyor, lütfen bekleyiniz.'
    });
    await loading.present();
    if(this.bodyData.kupe_numarasi != null && this.bodyData.hayvan_adi != null 
      && this.bodyData.cinsiyet != null && this.bodyData.irk_adi != null)
       {
    const url = this.BASE_URL+this.URL_ENDPOINT;
    this.istek.getDataAdd(url+"?buzagi="+this.bodyData.buzagi+"&kupe_numarasi="+this.bodyData.kupe_numarasi+"&hayvan_adi="+this.bodyData.hayvan_adi+
    "&dogum_tarihi="+this.bodyData.dogum_tarihi+"&gelis_tarihi="+this.bodyData.gelis_tarihi+"&boga_kupe="+this.bodyData.boga_kupe+
    "&anne_kupe="+this.bodyData.anne_kupe+"&cinsiyet="+this.bodyData.cinsiyet+"&irk_adi="+this.bodyData.irk_adi+"&TOKEN="+
    this.token+"&not="+this.bodyData.not).subscribe(res=>{
      this.addResponse = res;
      if(res.HATA == "0")
      {
        this.basariliModal();
        loading.dismiss();
      }
      else{
        this.ekleHata();
      loading.dismiss();
      }
      },err=>{
        this.ekleHata();
        loading.dismiss();
      })
    }
    else{
      this.nullValue();
      loading.dismiss();
    }
    loading.dismiss();
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
      message: 'Lütfen küpe numarası,hayvan adı,cinsiyet,ırk adı ve buzağı bölümünü boş bırakmayınız.',
      buttons: ['Tamam']
    });

    await alert.present();
  }
  async irkModalHata() {
    const alert = await this.alertController.create({
      subHeader: 'Uyarı',
      message: 'Irk zaten mevcut',
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
