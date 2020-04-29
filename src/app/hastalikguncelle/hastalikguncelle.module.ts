import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HastalikguncellePageRoutingModule } from './hastalikguncelle-routing.module';

import { HastalikguncellePage } from './hastalikguncelle.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HastalikguncellePageRoutingModule
  ],
  declarations: [HastalikguncellePage]
})
export class HastalikguncellePageModule {}
