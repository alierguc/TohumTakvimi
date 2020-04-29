import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TohumlamahayvanlistePage } from './tohumlamahayvanliste.page';

const routes: Routes = [
  {
    path: '',
    component: TohumlamahayvanlistePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TohumlamahayvanlistePageRoutingModule {}
