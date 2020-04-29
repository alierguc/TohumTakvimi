import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HbhastalikPageRoutingModule } from './hbhastalik-routing.module';

import { HbhastalikPage } from './hbhastalik.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HbhastalikPageRoutingModule
  ],
  declarations: [HbhastalikPage]
})
export class HbhastalikPageModule {}
