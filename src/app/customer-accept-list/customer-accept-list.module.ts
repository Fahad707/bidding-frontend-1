import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CustomerAcceptListPageRoutingModule } from './customer-accept-list-routing.module';

import { CustomerAcceptListPage } from './customer-accept-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CustomerAcceptListPageRoutingModule
  ],
  declarations: [CustomerAcceptListPage]
})
export class CustomerAcceptListPageModule {}
