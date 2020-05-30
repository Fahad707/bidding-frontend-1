import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChooseCartrimPage } from './choose-cartrim.page';

const routes: Routes = [
  {
    path: '',
    component: ChooseCartrimPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChooseCartrimPageRoutingModule {}
