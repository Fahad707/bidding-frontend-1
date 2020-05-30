import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DisplayCarsPageRoutingModule } from './display-cars-routing.module';

import { DisplayCarsPage } from './display-cars.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DisplayCarsPageRoutingModule
  ],
  declarations: [DisplayCarsPage]
})
export class DisplayCarsPageModule {}
