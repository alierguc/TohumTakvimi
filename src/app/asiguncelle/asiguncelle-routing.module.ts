import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AsiguncellePage } from './asiguncelle.page';

const routes: Routes = [
  {
    path: '',
    component: AsiguncellePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AsiguncellePageRoutingModule {}
