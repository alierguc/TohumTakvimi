import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KizginlikguncellePage } from './kizginlikguncelle.page';

const routes: Routes = [
  {
    path: '',
    component: KizginlikguncellePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KizginlikguncellePageRoutingModule {}
