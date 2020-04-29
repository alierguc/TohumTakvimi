import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HayvandurumPageRoutingModule } from './hayvandurum-routing.module';

import { HayvandurumPage } from './hayvandurum.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HayvandurumPageRoutingModule
  ],
  declarations: [HayvandurumPage]
})
export class HayvandurumPageModule {}
