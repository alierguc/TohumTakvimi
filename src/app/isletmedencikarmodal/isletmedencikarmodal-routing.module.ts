import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IsletmedencikarmodalPage } from './isletmedencikarmodal.page';

const routes: Routes = [
  {
    path: '',
    component: IsletmedencikarmodalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IsletmedencikarmodalPageRoutingModule {}
