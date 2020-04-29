import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AsiguncellePageRoutingModule } from './asiguncelle-routing.module';

import { AsiguncellePage } from './asiguncelle.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AsiguncellePageRoutingModule
  ],
  declarations: [AsiguncellePage]
})
export class AsiguncellePageModule {}
