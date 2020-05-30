import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChooseCartypePageRoutingModule } from './choose-cartype-routing.module';

import { ChooseCartypePage } from './choose-cartype.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChooseCartypePageRoutingModule
  ],
  declarations: [ChooseCartypePage]
})
export class ChooseCartypePageModule {}
