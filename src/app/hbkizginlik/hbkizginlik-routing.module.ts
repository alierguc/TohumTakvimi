import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HbkizginlikPage } from './hbkizginlik.page';

const routes: Routes = [
  {
    path: '',
    component: HbkizginlikPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HbkizginlikPageRoutingModule {}
