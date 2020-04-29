import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HbtartimPageRoutingModule } from './hbtartim-routing.module';

import { HbtartimPage } from './hbtartim.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HbtartimPageRoutingModule
  ],
  declarations: [HbtartimPage]
})
export class HbtartimPageModule {}
