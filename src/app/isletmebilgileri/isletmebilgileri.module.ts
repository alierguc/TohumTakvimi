import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IsletmebilgileriPageRoutingModule } from './isletmebilgileri-routing.module';

import { IsletmebilgileriPage } from './isletmebilgileri.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IsletmebilgileriPageRoutingModule
  ],
  declarations: [IsletmebilgileriPage]
})
export class IsletmebilgileriPageModule {}
