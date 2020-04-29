import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HayvanbakimilistPage } from './hayvanbakimilist.page';

const routes: Routes = [
  {
    path: '',
    component: HayvanbakimilistPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HayvanbakimilistPageRoutingModule {}
