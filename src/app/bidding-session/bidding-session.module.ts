import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import {MatDialogModule} from '@angular/material/dialog';
import { BiddingSessionPageRoutingModule } from './bidding-session-routing.module';

import { BiddingSessionPage, DialogOverviewExampleDialog } from './bidding-session.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MatDialogModule,
    BiddingSessionPageRoutingModule
  ],
  entryComponents:[DialogOverviewExampleDialog],
  declarations: [DialogOverviewExampleDialog ,BiddingSessionPage]
})
export class BiddingSessionPageModule {}
