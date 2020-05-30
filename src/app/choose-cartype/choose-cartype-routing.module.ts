import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChooseCartypePage } from './choose-cartype.page';

const routes: Routes = [
  {
    path: '',
    component: ChooseCartypePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChooseCartypePageRoutingModule {}
