import { CanActivate, Router } from '@angular/router';

import { AuthService } from 'src/app/sdk/core/auth.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RedirectLoginGuard implements CanActivate {
  constructor(private router: Router, private authService: AuthService) {}

  async canActivate() {
    const token = await this.authService.getTokenFromStorage();
    if (token) {
      this.router.navigateByUrl('/home');
      console.log("yes token of redirect hit");
    } else {
      return true;
    }
  }
}