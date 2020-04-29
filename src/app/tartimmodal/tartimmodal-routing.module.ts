import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TartimmodalPage } from './tartimmodal.page';

const routes: Routes = [
  {
    path: '',
    component: TartimmodalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TartimmodalPageRoutingModule {}
