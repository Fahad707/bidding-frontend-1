import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BiddingSessionPageRoutingModule } from './bidding-session-routing.module';

import { BiddingSessionPage } from './bidding-session.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BiddingSessionPageRoutingModule
  ],
  declarations: [BiddingSessionPage]
})
export class BiddingSessionPageModule {}
