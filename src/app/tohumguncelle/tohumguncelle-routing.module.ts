import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TohumguncellePage } from './tohumguncelle.page';

const routes: Routes = [
  {
    path: '',
    component: TohumguncellePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TohumguncellePageRoutingModule {}
