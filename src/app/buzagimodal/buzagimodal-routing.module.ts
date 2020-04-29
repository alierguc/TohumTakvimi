import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BuzagimodalPage } from './buzagimodal.page';

const routes: Routes = [
  {
    path: '',
    component: BuzagimodalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BuzagimodalPageRoutingModule {}
