import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import { IonicModule } from '@ionic/angular';
import {MatDialogModule} from '@angular/material/dialog';
import { BiddingSessionPageRoutingModule } from './bidding-session-routing.module';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { BiddingSessionPage, DialogOverviewExampleDialog } from './bidding-session.page';

import {FlexLayoutModule} from '@angular/flex-layout';
import { MatTooltipModule } from '@angular/material/tooltip';
import { HttpClientModule } from '@angular/common/http';
import { MatBadgeModule } from '@angular/material/badge';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MatIconModule,
    MatDialogModule,
    MatCheckboxModule,
    FlexLayoutModule,
    MatTooltipModule,
    HttpClientModule,
    MatTooltipModule,
    MatBadgeModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    BiddingSessionPageRoutingModule
  ],
  entryComponents:[DialogOverviewExampleDialog],
  declarations: [DialogOverviewExampleDialog ,BiddingSessionPage]
})
export class BiddingSessionPageModule {}
