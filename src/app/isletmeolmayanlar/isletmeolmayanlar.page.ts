import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, 
  ToastController, Platform, MenuController, AlertController, LoadingController } from '@ionic/angular';
import {RequestService} from '../api/request.service';
import { Storage } from '@ionic/storage';
@Component({
  selector: 'app-isletmeolmayanlar',
  templateUrl: './isletmeolmayanlar.page.html',
  styleUrls: ['./isletmeolmayanlar.page.scss'],
})
export class IsletmeolmayanlarPage implements OnInit {

  
  BASE_URL="http://167.172.156.114/tohumtakvimi/";
  URL_ENDPOINT="isletmede_olmayanlar.php";
  
  veriKontrol:boolean;

  token:any;

  data:any;
  geriAlKontrol:any;

  id:any;
  cikis_tarihi:any;
  cikis_nedeni:any;
  hayvan_adi:any;
  kupe_numarasi:any;
  anne_kupe:any;
  dogum_tarihi:any;
  gelis_tarihi:any;
  cinsiyet:any;
  
  constructor(private storage:Storage,private istek:RequestService,private loadingController:LoadingController,private alertController:AlertController) { 
    this.storage.get('TOKEN').then((val) => { 
      this.token = val;
      console.log("İşletmede olmayanlar token : " +this.token);
      this.getData();
      });
  }

  ngOnInit() {

  }


  async getData()
  {
    try{
    const url = this.BASE_URL+this.URL_ENDPOINT;
    this.istek.getDataHome(url+"?TOKEN="+this.token).subscribe(res=>{
    this.data = res;
    if(this.data["BILGI"] == "NONE")
    {
      this.veriKontrol = true;
    }
    
      console.log(res);
    },err=>{
        console.log(err); 
        
      })
    }
    catch(err)
    {
      this.durumHata();
    }
  }

  async geriAl(id)
  {
    try{
    
    
    const loading = await this.loadingController.create({
      message: 'İşleminiz gerçekleştiriliyor, lütfen bekleyiniz.'
    });
    await loading.present();
    const URL_ENDPOINT ="isletmeye_al.php";
    const url = this.BASE_URL+URL_ENDPOINT;
    this.istek.getDataHome(url+"?TOKEN="+this.token+"&hayvan_id="+id).subscribe(res=>{
    this.geriAlKontrol = res["HATA"];

    if(res["HATA"] = "0")
    {
     loading.dismiss();
      this.getData();
    }
    else{
      loading.dismiss();
      console.log("Olmadı");
    }
    console.log("geri al"+ res);
    loading.dismiss();
    console.log(res);
    },err=>{
      loading.dismiss();
        console.log(err); 
        
      })
    }
    catch{
      this.durumHata();
    }
  }

  async isletmedenSil(kupeNo)
  {
    try{

    
    const loading = await this.loadingController.create({
      message: 'İşleminiz gerçekleştiriliyor, lütfen bekleyiniz.'
    });
    await loading.present();
    const URL_ENDPOINT ="hayvan_sil.php";
    const url = this.BASE_URL+URL_ENDPOINT;
    this.istek.getDataHome(url+"?TOKEN="+this.token+"&kupe_numarasi="+kupeNo).subscribe(res=>{
    this.geriAlKontrol = res["HATA"];

    if(res["HATA"] = "0")
    {
      this.getData();
      loading.dismiss();
      console.log("tamamdır");
      
    }
    else{
      loading.dismiss();
      console.log("Olmadı");
    }
    loading.dismiss();
    console.log("geri al"+ res);
    console.log(res);
    },err=>{
        console.log(err); 
         loading.dismiss();
      })
  }
  catch(err)
  {
    this.durumHata();
  }
 
}
async durumHata() {
  const alert = await this.alertController.create({
    subHeader: 'Uyarı',
    message: 'Belirlenemeyen bir hata oluştu',
    buttons: ['Tamam']
  });

  await alert.present();
}
}