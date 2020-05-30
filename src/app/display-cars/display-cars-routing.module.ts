import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DisplayCarsPage } from './display-cars.page';

const routes: Routes = [
  {
    path: '',
    component: DisplayCarsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DisplayCarsPageRoutingModule {}
