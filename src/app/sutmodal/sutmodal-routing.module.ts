import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SutmodalPage } from './sutmodal.page';

const routes: Routes = [
  {
    path: '',
    component: SutmodalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SutmodalPageRoutingModule {}
