import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DealerDashboardPage } from './dealer-dashboard.page';

const routes: Routes = [
  {
    path: '',
    component: DealerDashboardPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DealerDashboardPageRoutingModule {}
