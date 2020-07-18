import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewsignupPage } from './newsignup.page';

const routes: Routes = [
  {
    path: '',
    component: NewsignupPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewsignupPageRoutingModule {}
