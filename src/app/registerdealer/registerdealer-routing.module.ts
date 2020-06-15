import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterdealerPage } from './registerdealer.page';

const routes: Routes = [
  {
    path: '',
    component: RegisterdealerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegisterdealerPageRoutingModule {}
