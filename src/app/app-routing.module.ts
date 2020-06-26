import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { IsLoginGuard } from './sdk/custom/guards/islogin.guard';

const routes: Routes = [
  { path: '', redirectTo: 'customer-bidding-session', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
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
  },
  {
    path: 'customer-bidding-session',
    loadChildren: () => import('./customer-bidding-session/customer-bidding-session.module').then( m => m.CustomerBiddingSessionPageModule)
  },
  {
    path: 'customer-bidding',
    loadChildren: () => import('./customer-bidding/customer-bidding.module').then( m => m.CustomerBiddingPageModule)
  },
  {
    path: 'choose-cartype',
    canActivate: [IsLoginGuard],
    loadChildren: () => import('./choose-cartype/choose-cartype.module').then( m => m.ChooseCartypePageModule)
  },
  {
    path: 'choose-cartrim',
    loadChildren: () => import('./choose-cartrim/choose-cartrim.module').then( m => m.ChooseCartrimPageModule)
  },
  {
    path: 'display-cars',
    loadChildren: () => import('./display-cars/display-cars.module').then( m => m.DisplayCarsPageModule)
  },
  {
    path: 'userlogin',
    loadChildren: () => import('./userlogin/userlogin.module').then( m => m.UserloginPageModule)
  },
  {
    path: 'usersignup',
    loadChildren: () => import('./usersignup/usersignup.module').then( m => m.UsersignupPageModule)
  },
  {
    path: 'dealerlogin',
    loadChildren: () => import('./dealerlogin/dealerlogin.module').then( m => m.DealerloginPageModule)
  },
  {
    path: 'registerdealer',
    loadChildren: () => import('./registerdealer/registerdealer.module').then( m => m.RegisterdealerPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
