import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VeterinerPageRoutingModule } from './veteriner-routing.module';

import { VeterinerPage } from './veteriner.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VeterinerPageRoutingModule
  ],
  declarations: [VeterinerPage]
})
export class VeterinerPageModule {}
