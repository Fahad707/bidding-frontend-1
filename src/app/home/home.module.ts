import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HomePage } from './home.page';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatTooltipModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }
    ])
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
