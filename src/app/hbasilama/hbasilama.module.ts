import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HbasilamaPageRoutingModule } from './hbasilama-routing.module';

import { HbasilamaPage } from './hbasilama.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HbasilamaPageRoutingModule
  ],
  declarations: [HbasilamaPage]
})
export class HbasilamaPageModule {}
