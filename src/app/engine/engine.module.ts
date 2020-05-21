import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EnginePageRoutingModule } from './engine-routing.module';

import { EnginePage } from './engine.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EnginePageRoutingModule
  ],
  declarations: [EnginePage]
})
export class EnginePageModule {}
