import { Component, OnInit } from '@angular/core';
import { LoadingController,AlertController } from '@ionic/angular';
import {RequestService} from '../api/request.service';
import { Storage } from '@ionic/storage';
@Component({
  selector: 'app-bilgiduzenle',
  templateUrl: './bilgiduzenle.page.html',
  styleUrls: ['./bilgiduzenle.page.scss'],
})
export class BilgiduzenlePage implements OnInit {

  getValue:any;
  hayvan_id:any;
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
  yeni_kupe_numarasi:any;
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
  hayvan_kupe_no_param:any;
  np_kupe_numarasi:any;
  deger:boolean;

  lastFor:any;
  public selectID: any = [];
 
   /* 192.168.1.34 */
  BASE_URL="http://167.172.156.114/tohumtakvimi/";
  URL_ENDPOINT = "hayvan_guncelle.php";
  URL_IRK_EKLE = "irk_ekle.php";
  
  URL_IRK_LISTELE = "irk_listesi.php";
  selectcategory:any;
  addResponse:any;

  /* token : a2swS1o1VHZxd0VoVENTd2MweU80THNOeFNLOW1NT3BsaTRGbWhzcFlTek5SY01RN3AwcmJHZ0s4aGoyOUIvY05pSVIrTDFxbXJPM2xxK1Zjblg2eFo0QlU1UVZSQThYbStXRHplN3ZTQU1SVkRhbVJyUkppdz09 */ 

  /* 0 hayvan düzenleme */
  /* 1 tohumlama,aşılama vs düzenleme */
  bodyData = { 
    "kupe_numarasi": this.kupe_numarasi, "hayvan_adi": this.hayvan_adi, 
    "dogum_tarihi": this.dogum_tarihi, "gelis_tarihi": this.gelis_tarihi,
    "boga_kupe": this.boga_kupe,"anne_kupe": this.anne_kupe,"cinsiyet": this.cinsiyet,
    "not": this.not,"buzagi":this.buzagi,"irk_adi":this.irkAdi,"yeni_kupe_numarasi":this.yeni_kupe_numarasi};

    irkDatas = {
      "irk_adi_ekle":this.irk_adi_ekle
    }
    constructor(private loadingController:LoadingController,
      private alertController:AlertController,public istek:RequestService,private storage:Storage) {
        this.storage.get('TOKEN').then((val) => { 
          this.token = val;
          console.log(this.token);
          this.np_kupe_numarasi = `${this.hayvan_kupe_no_param}`;
          console.log("Küpe Numarası : " + this.np_kupe_numarasi);
          this.irkListele();
          });

       }

       ngOnInit() {
        this.irkListele();
        this.storage.get('TOKEN').then((val) => { 
          this.token = val;
          console.log(this.token);
          this.np_kupe_numarasi = `${this.hayvan_kupe_no_param}`;
          console.log("Küpe Numarası : " + this.np_kupe_numarasi);
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
        this.istek.getSearchData(url+"?TOKEN="+"a2swS1o1VHZxd0VoVENTd2MweU80THNOeFNLOW1NT3BsaTRGbWhzcFlTek5SY01RN3AwcmJHZ0s4aGoyOUIvY05pSVIrTDFxbXJPM2xxK1Zjblg2eFo0QlU1UVZSQThYbStXRHplN3ZTQU1SVkRhbVJyUkppdz09").subscribe(res=>{
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
        console.log("Deneme küpe numarası : "+this.bodyData.yeni_kupe_numarasi);
        console.log("Buzağı : "+this.bodyData.buzagi);
        console.log("Hayvan Adı : "+this.bodyData.hayvan_adi);
        console.log("Doğum Tarihi : "+this.bodyData.dogum_tarihi);
        console.log("Geliş Tarihi : "+this.bodyData.gelis_tarihi);
        console.log("Boğa Küpe : "+this.bodyData.boga_kupe);
        console.log("Anne Küpe : "+this.bodyData.anne_kupe);
        console.log("Cinsiyet : "+this.bodyData.cinsiyet);
        console.log("Irk Adı : "+this.bodyData.irk_adi);
  
        const loading = await this.loadingController.create({
          message: 'İşleminiz gerçekleştiriliyor, lütfen bekleyiniz.'
        });
        await loading.present();
        if(this.bodyData.yeni_kupe_numarasi != null && this.bodyData.hayvan_adi != null 
          && this.bodyData.cinsiyet != null && this.bodyData.irk_adi != null)
           {
        const url = this.BASE_URL+this.URL_ENDPOINT;
        this.istek.getDataAdd(url+"?buzagi="+this.bodyData.buzagi+"&kupe_numarasi="+this.np_kupe_numarasi+"&hayvan_adi="+this.bodyData.hayvan_adi+
        "&dogum_tarihi="+this.bodyData.dogum_tarihi+"&yeni_kupe_numarasi="+this.bodyData.yeni_kupe_numarasi+"&gelis_tarihi="+this.bodyData.gelis_tarihi+"&boga_kupe="+this.bodyData.boga_kupe+
        "&anne_kupe="+this.bodyData.anne_kupe+"&cinsiyet="+this.bodyData.cinsiyet+"&irk_adi="+this.bodyData.irk_adi+"&TOKEN="+
        "a2swS1o1VHZxd0VoVENTd2MweU80THNOeFNLOW1NT3BsaTRGbWhzcFlTek5SY01RN3AwcmJHZ0s4aGoyOUIvY05pSVIrTDFxbXJPM2xxK1Zjblg2eFo0QlU1UVZSQThYbStXRHplN3ZTQU1SVkRhbVJyUkppdz09"+"&not="+this.bodyData.not).subscribe(res=>{
          this.addResponse = res;
         
          if(res.HATA == "0")
          {
            this.basariliModal();
            loading.dismiss();
            console.log(this.addResponse);
          }
          else{
            this.ekleHata();
          loading.dismiss();
          console.log(this.addResponse);
          }
          },err=>{
            this.ekleHata();
            loading.dismiss();
            console.log(this.addResponse);
          })
        }
        else{
          this.nullValue();
          loading.dismiss();
          console.log(this.addResponse);
        }
        loading.dismiss();
        console.log(this.addResponse);
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