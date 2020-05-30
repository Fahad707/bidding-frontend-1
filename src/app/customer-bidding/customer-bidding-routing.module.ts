import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustomerBiddingPage } from './customer-bidding.page';

const routes: Routes = [
  {
    path: '',
    component: CustomerBiddingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustomerBiddingPageRoutingModule {}
