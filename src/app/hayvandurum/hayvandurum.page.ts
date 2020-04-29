import { Component, OnInit } from '@angular/core';
import { LoadingController,AlertController,ModalController } from '@ionic/angular';
import { KizginlikmodalPage } from '../kizginlikmodal/kizginlikmodal.page';
import { TohumlamamodalPage } from '../tohumlamamodal/tohumlamamodal.page';
import { AsilamamodalPage } from '../asilamamodal/asilamamodal.page';
import { HastalikmodalPage } from '../hastalikmodal/hastalikmodal.page';
import { HayvanbakimilistPage } from '../hayvanbakimilist/hayvanbakimilist.page';
import { RequestService } from '../api/request.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { HbtartimPage } from '../hbtartim/hbtartim.page';
import { HbtohumlamaPage} from '../hbtohumlama/hbtohumlama.page';
import { HbasilamaPage} from '../hbasilama/hbasilama.page';
import { HbhastalikPage } from '../hbhastalik/hbhastalik.page';
import { HbkizginlikPage } from '../hbkizginlik/hbkizginlik.page';
import { TartimmodalPage } from '../tartimmodal/tartimmodal.page';

@Component({
  selector: 'app-hayvandurum',
  templateUrl: './hayvandurum.page.html',
  styleUrls: ['./hayvandurum.page.scss'],
})
export class HayvandurumPage implements OnInit {
  hayvan_id;
  newAnimID:any;



  getValue:any;


  BASE_URL="http://167.172.156.114/tohumtakvimi/";
  URL_ENDPOINT="hayvan_listesi.php";
  ENDPOINT_LISTE = "liste.php";
  responseSearchData:any;

  constructor(private modalController:ModalController,private loadingController:LoadingController,private istek:RequestService,
    private router:ActivatedRoute,private navRoute:Router) {
   
     
   }

  ngOnInit() {
    this.getValue = `${this.hayvan_id}`;
    /* Hayvan bakımı listten dönen hayvan için id değeri */
  }

  async kizginlikGit() {
    const modal = await this.modalController.create({
      component: KizginlikmodalPage,
      cssClass:'custom-modal',
      componentProps: { 
        hayvan_id: this.getValue
       
      }
    });
    return await modal.present();
  }
  async itemKizginlik() {
    const modal = await this.modalController.create({
      component: HbkizginlikPage,
      componentProps: { 
        hayvan_id: this.getValue
       
      }

    });
    return await modal.present();
  }
  async itemTohumlama() {
    const modal = await this.modalController.create({
      component: HbtohumlamaPage,
      componentProps: { 
        hayvan_id: this.getValue
       
      }

    });
    return await modal.present();
  }
  async itemAsilamalar() {
    const modal = await this.modalController.create({
      component: HbasilamaPage,
      componentProps: { 
        hayvan_id: this.getValue
       
      }

    });
    return await modal.present();
  }
  async itemHastalik() {
    const modal = await this.modalController.create({
      component: HbhastalikPage,
      componentProps: { 
        hayvan_id: this.getValue
       
      }

    });
    return await modal.present();
  }
  async itemTartim() {
    const modal = await this.modalController.create({
      component: HbtartimPage,
      componentProps: { 
        hayvan_id: this.getValue
       
      }

    });
    return await modal.present();
  }
  async tohumlamaGit() {
    const modal = await this.modalController.create({
      component: TohumlamamodalPage,
      cssClass:'custom-modal',
      componentProps: { 
        hayvan_id: this.getValue
       
      }
    });
    return await modal.present();
  }
  async asilamaGit() {
    const modal = await this.modalController.create({
      component: AsilamamodalPage,
      cssClass:'custom-modal',
      componentProps: { 
        hayvan_id: this.getValue
       
      }
    });
    return await modal.present();
  }
  async hastaliklarGit() {
    const modal = await this.modalController.create({
      component: HastalikmodalPage,
      cssClass:'custom-modal',
      componentProps: { 
        hayvan_id: this.getValue
       
      }
    });
    return await modal.present();
  }
  async tartimGit() {
    const modal = await this.modalController.create({
      component: TartimmodalPage,
      cssClass:'custom-modal',
      componentProps: { 
        hayvan_id: this.getValue
       
      }
    });
    return await modal.present();
  }
}
