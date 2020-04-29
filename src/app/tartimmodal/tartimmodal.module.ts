import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TartimmodalPageRoutingModule } from './tartimmodal-routing.module';

import { TartimmodalPage } from './tartimmodal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TartimmodalPageRoutingModule
  ],
  declarations: [TartimmodalPage]
})
export class TartimmodalPageModule {}
