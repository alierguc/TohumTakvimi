import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HayvanaraPageRoutingModule } from './hayvanara-routing.module';

import { HayvanaraPage } from './hayvanara.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HayvanaraPageRoutingModule
  ],
  declarations: [HayvanaraPage]
})
export class HayvanaraPageModule {}
