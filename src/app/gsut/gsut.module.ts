import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GsutPageRoutingModule } from './gsut-routing.module';

import { GsutPage } from './gsut.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GsutPageRoutingModule
  ],
  declarations: [GsutPage]
})
export class GsutPageModule {}
