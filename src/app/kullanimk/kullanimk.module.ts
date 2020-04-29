import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KullanimkPageRoutingModule } from './kullanimk-routing.module';

import { KullanimkPage } from './kullanimk.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KullanimkPageRoutingModule
  ],
  declarations: [KullanimkPage]
})
export class KullanimkPageModule {}
