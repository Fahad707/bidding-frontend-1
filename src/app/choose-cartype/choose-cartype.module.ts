import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import { IonicModule } from '@ionic/angular';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { ChooseCartypePageRoutingModule } from './choose-cartype-routing.module';

import { ChooseCartypePage } from './choose-cartype.page';
import { HttpClientModule } from '@angular/common/http';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatBadgeModule } from '@angular/material/badge';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  imports: [
    MatCheckboxModule,
    CommonModule,
    FormsModule,
    MatIconModule,
    HttpClientModule,
    MatTooltipModule,
    MatBadgeModule,
    IonicModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    FlexLayoutModule,
    ChooseCartypePageRoutingModule
  ],
  declarations: [ChooseCartypePage]
})
export class ChooseCartypePageModule {}
