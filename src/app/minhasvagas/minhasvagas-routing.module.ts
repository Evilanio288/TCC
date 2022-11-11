import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MinhasvagasPage } from './minhasvagas.page';

const routes: Routes = [
  {
    path: '',
    component: MinhasvagasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MinhasvagasPageRoutingModule {}
