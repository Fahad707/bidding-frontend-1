import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CarDealsPage } from './car-deals.page';

const routes: Routes = [
  {
    path: '',
    component: CarDealsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CarDealsPageRoutingModule {}
