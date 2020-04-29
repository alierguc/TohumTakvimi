import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KullanimkPage } from './kullanimk.page';

const routes: Routes = [
  {
    path: '',
    component: KullanimkPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KullanimkPageRoutingModule {}
