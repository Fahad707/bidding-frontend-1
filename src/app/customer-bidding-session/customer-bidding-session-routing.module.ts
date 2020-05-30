import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustomerBiddingSessionPage } from './customer-bidding-session.page';

const routes: Routes = [
  {
    path: '',
    component: CustomerBiddingSessionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustomerBiddingSessionPageRoutingModule {}
