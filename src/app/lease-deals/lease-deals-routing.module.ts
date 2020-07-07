import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LeaseDealsPage } from './lease-deals.page';

const routes: Routes = [
  {
    path: '',
    component: LeaseDealsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LeaseDealsPageRoutingModule {}
