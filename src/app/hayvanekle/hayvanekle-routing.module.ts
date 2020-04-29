import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HayvaneklePage } from './hayvanekle.page';

const routes: Routes = [
  {
    path: '',
    component: HayvaneklePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HayvaneklePageRoutingModule {}
