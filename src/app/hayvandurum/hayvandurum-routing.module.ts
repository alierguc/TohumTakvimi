import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HayvandurumPage } from './hayvandurum.page';

const routes: Routes = [
  {
    path: '',
    component: HayvandurumPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HayvandurumPageRoutingModule {}
