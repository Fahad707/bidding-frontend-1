import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AcceptlistPageRoutingModule } from './acceptlist-routing.module';

import { AcceptlistPage } from './acceptlist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AcceptlistPageRoutingModule
  ],
  declarations: [AcceptlistPage]
})
export class AcceptlistPageModule {}
