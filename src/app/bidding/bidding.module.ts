import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatTooltipModule } from '@angular/material/tooltip';
import { IonicModule } from '@ionic/angular';

import { BiddingPageRoutingModule } from './bidding-routing.module';

import { BiddingPage } from './bidding.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MatTooltipModule,
    BiddingPageRoutingModule
  ],
  declarations: [BiddingPage]
})
export class BiddingPageModule {}
