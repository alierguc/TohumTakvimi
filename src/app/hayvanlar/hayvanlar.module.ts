import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HayvanlarPageRoutingModule } from './hayvanlar-routing.module';

import { HayvanlarPage } from './hayvanlar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HayvanlarPageRoutingModule
  ],
  declarations: [HayvanlarPage]
})
export class HayvanlarPageModule {}
