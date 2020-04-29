import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BuzagimodalPageRoutingModule } from './buzagimodal-routing.module';

import { BuzagimodalPage } from './buzagimodal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BuzagimodalPageRoutingModule
  ],
  declarations: [BuzagimodalPage]
})
export class BuzagimodalPageModule {}
