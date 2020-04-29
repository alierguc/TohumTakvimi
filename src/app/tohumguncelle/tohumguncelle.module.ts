import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TohumguncellePageRoutingModule } from './tohumguncelle-routing.module';

import { TohumguncellePage } from './tohumguncelle.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TohumguncellePageRoutingModule
  ],
  declarations: [TohumguncellePage]
})
export class TohumguncellePageModule {}
