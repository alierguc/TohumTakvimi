import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HayvanlistesiPageRoutingModule } from './hayvanlistesi-routing.module';

import { HayvanlistesiPage } from './hayvanlistesi.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HayvanlistesiPageRoutingModule
  ],
  declarations: [HayvanlistesiPage]
})
export class HayvanlistesiPageModule {}
