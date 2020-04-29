import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HayvanlistesiPage } from './hayvanlistesi.page';

const routes: Routes = [
  {
    path: '',
    component: HayvanlistesiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HayvanlistesiPageRoutingModule {}
