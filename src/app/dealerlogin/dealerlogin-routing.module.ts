import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DealerloginPage } from './dealerlogin.page';

const routes: Routes = [
  {
    path: '',
    component: DealerloginPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DealerloginPageRoutingModule {}
