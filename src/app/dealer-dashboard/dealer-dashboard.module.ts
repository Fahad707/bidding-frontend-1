import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { DealerDashboardPageRoutingModule } from './dealer-dashboard-routing.module';

import { DealerDashboardPage } from './dealer-dashboard.page';

@NgModule({
  
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DealerDashboardPageRoutingModule
  ],
  declarations: [DealerDashboardPage]
})
export class DealerDashboardPageModule {}
