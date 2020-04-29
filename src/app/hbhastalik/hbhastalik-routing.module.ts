import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HbhastalikPage } from './hbhastalik.page';

const routes: Routes = [
  {
    path: '',
    component: HbhastalikPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HbhastalikPageRoutingModule {}
