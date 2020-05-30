import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CustomerBiddingSessionPageRoutingModule } from './customer-bidding-session-routing.module';

import { CustomerBiddingSessionPage } from './customer-bidding-session.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CustomerBiddingSessionPageRoutingModule
  ],
  declarations: [CustomerBiddingSessionPage]
})
export class CustomerBiddingSessionPageModule {}
