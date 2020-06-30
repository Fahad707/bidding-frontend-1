import { CanActivate, Router } from '@angular/router';

import { AuthService } from 'src/app/sdk/core/auth.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IsLoginGuard implements CanActivate {
  constructor(private router: Router, private authService: AuthService) {}

  async canActivate() {
    const token = await this.authService.getTokenFromStorage();
    if (!token) {
      console.log("not token of isloginguard hit");
      this.router.navigateByUrl('/userlogin');

    } else {
      return true;
    }
  }
} 