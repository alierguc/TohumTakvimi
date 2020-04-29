import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IsletmebilgileriPage } from './isletmebilgileri.page';

const routes: Routes = [
  {
    path: '',
    component: IsletmebilgileriPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IsletmebilgileriPageRoutingModule {}
