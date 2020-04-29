import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HbasilamaPage } from './hbasilama.page';

const routes: Routes = [
  {
    path: '',
    component: HbasilamaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HbasilamaPageRoutingModule {}
