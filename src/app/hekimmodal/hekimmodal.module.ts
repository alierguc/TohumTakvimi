import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HekimmodalPageRoutingModule } from './hekimmodal-routing.module';

import { HekimmodalPage } from './hekimmodal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HekimmodalPageRoutingModule
  ],
  declarations: [HekimmodalPage]
})
export class HekimmodalPageModule {}
