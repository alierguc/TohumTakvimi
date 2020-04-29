import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HbtohumlamaPageRoutingModule } from './hbtohumlama-routing.module';

import { HbtohumlamaPage } from './hbtohumlama.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HbtohumlamaPageRoutingModule
  ],
  declarations: [HbtohumlamaPage]
})
export class HbtohumlamaPageModule {}
