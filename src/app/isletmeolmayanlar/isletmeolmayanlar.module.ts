import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IsletmeolmayanlarPageRoutingModule } from './isletmeolmayanlar-routing.module';

import { IsletmeolmayanlarPage } from './isletmeolmayanlar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IsletmeolmayanlarPageRoutingModule
  ],
  declarations: [IsletmeolmayanlarPage]
})
export class IsletmeolmayanlarPageModule {}
