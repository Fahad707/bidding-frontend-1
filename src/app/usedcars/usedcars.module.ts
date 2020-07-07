import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UsedcarsPageRoutingModule } from './usedcars-routing.module';

import { UsedcarsPage } from './usedcars.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UsedcarsPageRoutingModule
  ],
  declarations: [UsedcarsPage]
})
export class UsedcarsPageModule {}
