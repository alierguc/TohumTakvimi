import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VeterinerPage } from './veteriner.page';

const routes: Routes = [
  {
    path: '',
    component: VeterinerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VeterinerPageRoutingModule {}
