import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HayvanaraPage } from './hayvanara.page';

const routes: Routes = [
  {
    path: '',
    component: HayvanaraPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HayvanaraPageRoutingModule {}
