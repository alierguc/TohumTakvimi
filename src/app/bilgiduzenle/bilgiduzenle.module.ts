import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BilgiduzenlePageRoutingModule } from './bilgiduzenle-routing.module';

import { BilgiduzenlePage } from './bilgiduzenle.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BilgiduzenlePageRoutingModule
  ],
  declarations: [BilgiduzenlePage]
})
export class BilgiduzenlePageModule {}
