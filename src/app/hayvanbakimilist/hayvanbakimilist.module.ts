import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HayvanbakimilistPageRoutingModule } from './hayvanbakimilist-routing.module';

import { HayvanbakimilistPage } from './hayvanbakimilist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HayvanbakimilistPageRoutingModule
  ],
  declarations: [HayvanbakimilistPage]
})
export class HayvanbakimilistPageModule {}
