import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HbtohumlamaPage } from './hbtohumlama.page';

const routes: Routes = [
  {
    path: '',
    component: HbtohumlamaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HbtohumlamaPageRoutingModule {}
