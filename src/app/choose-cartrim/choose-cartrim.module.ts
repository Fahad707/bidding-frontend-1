import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChooseCartrimPageRoutingModule } from './choose-cartrim-routing.module';

import { ChooseCartrimPage } from './choose-cartrim.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChooseCartrimPageRoutingModule
  ],
  declarations: [ChooseCartrimPage]
})
export class ChooseCartrimPageModule {}
