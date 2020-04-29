import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HayvaneklePageRoutingModule } from './hayvanekle-routing.module';

import { HayvaneklePage } from './hayvanekle.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HayvaneklePageRoutingModule
  ],
  declarations: [HayvaneklePage]
})
export class HayvaneklePageModule {}
