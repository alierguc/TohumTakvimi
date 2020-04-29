import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SutmodalPageRoutingModule } from './sutmodal-routing.module';

import { SutmodalPage } from './sutmodal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SutmodalPageRoutingModule
  ],
  declarations: [SutmodalPage]
})
export class SutmodalPageModule {}
