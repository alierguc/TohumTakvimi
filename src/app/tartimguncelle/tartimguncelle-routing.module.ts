import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TartimguncellePage } from './tartimguncelle.page';

const routes: Routes = [
  {
    path: '',
    component: TartimguncellePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TartimguncellePageRoutingModule {}
