import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CustomerBiddingPageRoutingModule } from './customer-bidding-routing.module';
import { MatTooltipModule } from '@angular/material/tooltip';

import { CustomerBiddingPage } from './customer-bidding.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MatTooltipModule,
    CustomerBiddingPageRoutingModule
  ],
  declarations: [CustomerBiddingPage]
})
export class CustomerBiddingPageModule {}
