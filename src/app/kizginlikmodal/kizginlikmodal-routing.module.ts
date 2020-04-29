import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KizginlikmodalPage } from './kizginlikmodal.page';

const routes: Routes = [
  {
    path: '',
    component: KizginlikmodalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KizginlikmodalPageRoutingModule {}
