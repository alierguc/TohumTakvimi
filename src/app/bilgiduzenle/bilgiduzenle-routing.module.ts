import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BilgiduzenlePage } from './bilgiduzenle.page';

const routes: Routes = [
  {
    path: '',
    component: BilgiduzenlePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BilgiduzenlePageRoutingModule {}
