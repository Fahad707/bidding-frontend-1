import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UserloginPageRoutingModule } from './userlogin-routing.module';

import { UserloginPage } from './userlogin.page';


import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UserloginPageRoutingModule,
    MatFormFieldModule,
    MatSelectModule,
    MatCardModule,
    MatCheckboxModule,
    MatButtonModule
  ],
  declarations: [UserloginPage]
})
export class UserloginPageModule {}
