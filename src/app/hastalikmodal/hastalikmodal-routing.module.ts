import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HastalikmodalPage } from './hastalikmodal.page';

const routes: Routes = [
  {
    path: '',
    component: HastalikmodalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HastalikmodalPageRoutingModule {}
