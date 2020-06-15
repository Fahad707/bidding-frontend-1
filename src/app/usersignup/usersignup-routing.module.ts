import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsersignupPage } from './usersignup.page';

const routes: Routes = [
  {
    path: '',
    component: UsersignupPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsersignupPageRoutingModule {}
