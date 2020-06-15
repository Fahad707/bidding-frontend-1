import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UsersignupPageRoutingModule } from './usersignup-routing.module';

import { UsersignupPage } from './usersignup.page';


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
    UsersignupPageRoutingModule,
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatSelectModule,
    MatFormFieldModule
  ],
  declarations: [UsersignupPage]
})
export class UsersignupPageModule {}
