import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CustomerBiddingPageRoutingModule } from './customer-bidding-routing.module';

import { CustomerBiddingPage } from './customer-bidding.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CustomerBiddingPageRoutingModule
  ],
  declarations: [CustomerBiddingPage]
})
export class CustomerBiddingPageModule {}
