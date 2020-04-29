import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TohumlamamodalPageRoutingModule } from './tohumlamamodal-routing.module';

import { TohumlamamodalPage } from './tohumlamamodal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TohumlamamodalPageRoutingModule
  ],
  declarations: [TohumlamamodalPage]
})
export class TohumlamamodalPageModule {}
