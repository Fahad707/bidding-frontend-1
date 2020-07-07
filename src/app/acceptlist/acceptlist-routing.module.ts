import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AcceptlistPage } from './acceptlist.page';

const routes: Routes = [
  {
    path: '',
    component: AcceptlistPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AcceptlistPageRoutingModule {}
