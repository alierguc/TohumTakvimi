import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IsletmedencikarmodalPageRoutingModule } from './isletmedencikarmodal-routing.module';

import { IsletmedencikarmodalPage } from './isletmedencikarmodal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IsletmedencikarmodalPageRoutingModule
  ],
  declarations: [IsletmedencikarmodalPage]
})
export class IsletmedencikarmodalPageModule {}
