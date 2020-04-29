import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IsletmeolmayanlarPage } from './isletmeolmayanlar.page';

const routes: Routes = [
  {
    path: '',
    component: IsletmeolmayanlarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IsletmeolmayanlarPageRoutingModule {}
