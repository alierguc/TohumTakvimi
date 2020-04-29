import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SutlistemodalPageRoutingModule } from './sutlistemodal-routing.module';

import { SutlistemodalPage } from './sutlistemodal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SutlistemodalPageRoutingModule
  ],
  declarations: [SutlistemodalPage]
})
export class SutlistemodalPageModule {}
