import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HayvanlarPage } from './hayvanlar.page';

const routes: Routes = [
  {
    path: '',
    component: HayvanlarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HayvanlarPageRoutingModule {}
