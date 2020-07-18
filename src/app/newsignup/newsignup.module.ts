import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { NewsignupPageRoutingModule } from './newsignup-routing.module';

import { NewsignupPage } from './newsignup.page';

@NgModule({
  imports: [
    CommonModule,
    //FormsModule,
    ReactiveFormsModule,
    IonicModule,
    NewsignupPageRoutingModule
  ],
  declarations: [NewsignupPage]
})
export class NewsignupPageModule {}
