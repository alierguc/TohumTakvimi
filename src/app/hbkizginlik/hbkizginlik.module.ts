import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HbkizginlikPageRoutingModule } from './hbkizginlik-routing.module';

import { HbkizginlikPage } from './hbkizginlik.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HbkizginlikPageRoutingModule
  ],
  declarations: [HbkizginlikPage]
})
export class HbkizginlikPageModule {}
