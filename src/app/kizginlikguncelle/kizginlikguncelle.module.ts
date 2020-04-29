import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KizginlikguncellePageRoutingModule } from './kizginlikguncelle-routing.module';

import { KizginlikguncellePage } from './kizginlikguncelle.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KizginlikguncellePageRoutingModule
  ],
  declarations: [KizginlikguncellePage]
})
export class KizginlikguncellePageModule {}
