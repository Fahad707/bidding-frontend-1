// import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { FormsModule } from '@angular/forms';
// import { MatTooltipModule } from '@angular/material/tooltip';
// import { IonicModule } from '@ionic/angular';

// import { BiddingPageRoutingModule } from './bidding-routing.module';

// import { BiddingPage } from './bidding.page';
// import { HttpClientModule } from '@angular/common/http';
// import { MatBadgeModule } from '@angular/material/badge';
// import { MatToolbarModule } from '@angular/material/toolbar';
// import { MatButtonModule } from '@angular/material/button';
// import { MatSidenavModule } from '@angular/material/sidenav';
// import { MatIconModule } from '@angular/material/icon';
// import { MatListModule } from '@angular/material/list';
// import { FlexLayoutModule } from '@angular/flex-layout';

// @NgModule({
//   imports: [
//     CommonModule,
//     FormsModule,
//     IonicModule,
//     MatTooltipModule,
//     HttpClientModule,
//     MatTooltipModule,
//     MatBadgeModule,
//     IonicModule,
//     MatToolbarModule,
//     MatButtonModule,
//     MatSidenavModule,
//     MatIconModule,
//     MatListModule,
//     FlexLayoutModule,
//     BiddingPageRoutingModule
//   ],
//   declarations: [BiddingPage]
// })
// export class BiddingPageModule {}
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
