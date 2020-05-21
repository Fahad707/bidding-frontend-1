import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  {
    path: 'user-login',
    loadChildren: () => import('./user-login/user-login.module').then( m => m.UserLoginPageModule)
  },
  {
    path: 'dealer-dashboard',
    loadChildren: () => import('./dealer-dashboard/dealer-dashboard.module').then( m => m.DealerDashboardPageModule)
  },
  {
    path: 'bidding',
    loadChildren: () => import('./bidding/bidding.module').then( m => m.BiddingPageModule)
  },
  {
    path: 'bidding-session',
    loadChildren: () => import('./bidding-session/bidding-session.module').then( m => m.BiddingSessionPageModule)
  },
  {
    path: 'engine',
    loadChildren: () => import('./engine/engine.module').then( m => m.EnginePageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
