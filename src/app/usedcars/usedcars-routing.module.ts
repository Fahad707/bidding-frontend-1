import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsedcarsPage } from './usedcars.page';

const routes: Routes = [
  {
    path: '',
    component: UsedcarsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsedcarsPageRoutingModule {}
