import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HbtartimPage } from './hbtartim.page';

const routes: Routes = [
  {
    path: '',
    component: HbtartimPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HbtartimPageRoutingModule {}
