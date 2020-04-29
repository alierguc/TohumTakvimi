import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HastalikmodalPageRoutingModule } from './hastalikmodal-routing.module';

import { HastalikmodalPage } from './hastalikmodal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HastalikmodalPageRoutingModule
  ],
  declarations: [HastalikmodalPage]
})
export class HastalikmodalPageModule {}
