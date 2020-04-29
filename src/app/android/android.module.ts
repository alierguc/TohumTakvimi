import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AndroidPageRoutingModule } from './android-routing.module';

import { AndroidPage } from './android.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AndroidPageRoutingModule
  ],
  declarations: [AndroidPage]
})
export class AndroidPageModule {}
