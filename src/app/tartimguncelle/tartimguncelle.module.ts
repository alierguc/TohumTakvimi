import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TartimguncellePageRoutingModule } from './tartimguncelle-routing.module';

import { TartimguncellePage } from './tartimguncelle.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TartimguncellePageRoutingModule
  ],
  declarations: [TartimguncellePage]
})
export class TartimguncellePageModule {}
