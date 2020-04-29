import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TohumlamamodalPage } from './tohumlamamodal.page';

const routes: Routes = [
  {
    path: '',
    component: TohumlamamodalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TohumlamamodalPageRoutingModule {}
