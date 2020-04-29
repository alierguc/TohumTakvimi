import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SutlistemodalPage } from './sutlistemodal.page';

const routes: Routes = [
  {
    path: '',
    component: SutlistemodalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SutlistemodalPageRoutingModule {}
