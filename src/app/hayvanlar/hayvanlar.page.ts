import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController,ModalController } from '@ionic/angular';
import { BuzagimodalPage } from '../buzagimodal/buzagimodal.page';
import { HayvanlistesiPage } from '../hayvanlistesi/hayvanlistesi.page';
@Component({
  selector: 'app-hayvanlar',
  templateUrl: './hayvanlar.page.html',
  styleUrls: ['./hayvanlar.page.scss'],
})
export class HayvanlarPage implements OnInit {

  erkekId:any;
  disiId:any;
  constructor(private navCtrl:NavController,private router:Router,private modalCtrl:ModalController) { }

  ngOnInit() {
   
  }

  async erkekYonlendir() {
    const modal = await this.modalCtrl.create({
      component: HayvanlistesiPage,
      componentProps: { 
        erkekId: 1
      
      }
    });
    return await modal.present();
  }
  async disiYonlendir() {
    const modal = await this.modalCtrl.create({
      component: HayvanlistesiPage,
      componentProps: { 
        disiId: 0
      
      }

    });
    return await modal.present();
  }
   async buzagiGit() {
    const modal = await this.modalCtrl.create({
      component: BuzagimodalPage

    });
    return await modal.present();
  }
}
