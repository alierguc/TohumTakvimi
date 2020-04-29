import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AsilamamodalPage } from './asilamamodal.page';

const routes: Routes = [
  {
    path: '',
    component: AsilamamodalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AsilamamodalPageRoutingModule {}
