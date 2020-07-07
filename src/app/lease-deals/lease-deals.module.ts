import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LeaseDealsPageRoutingModule } from './lease-deals-routing.module';

import { LeaseDealsPage } from './lease-deals.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LeaseDealsPageRoutingModule
  ],
  declarations: [LeaseDealsPage]
})
export class LeaseDealsPageModule {}
