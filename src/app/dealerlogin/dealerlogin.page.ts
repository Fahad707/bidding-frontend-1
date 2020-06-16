import { Component, OnInit } from '@angular/core';

import { DealerService } from '../sdk/custom/dealer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dealerlogin',
  templateUrl: './dealerlogin.page.html',
  styleUrls: ['./dealerlogin.page.scss'],
})
export class DealerloginPage implements OnInit {
  

  constructor(private router: Router,private dealerService : DealerService) { }
  loading = false;
  name;
  password;
 
  ngOnInit() {
  }
  save() {
    console.log("Hii");
    const loginData = {
      name:this.name,
      password:this.password
    }
     
   
    console.log('loginData', loginData);
    // we need to send this data to our node.js server

    this.dealerService.dealerLogin(loginData).subscribe(
      data => {
        console.log('got response from server', data);
        this.loading = false;
      // this.authService.saveTokenToStorage(data.token);
      // this.router.navigateByUrl('/dealer-dashboard');
      // href='/dealer-dashboard';
      },
      error => {
        this.loading = false;
        console.log('error', error);
      }
    );
  }
}
