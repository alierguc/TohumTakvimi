import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HekimmodalPage } from './hekimmodal.page';

const routes: Routes = [
  {
    path: '',
    component: HekimmodalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HekimmodalPageRoutingModule {}
