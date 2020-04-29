import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AsilamamodalPageRoutingModule } from './asilamamodal-routing.module';

import { AsilamamodalPage } from './asilamamodal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AsilamamodalPageRoutingModule
  ],
  declarations: [AsilamamodalPage]
})
export class AsilamamodalPageModule {}
