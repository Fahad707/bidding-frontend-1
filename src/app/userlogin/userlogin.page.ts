import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from '../sdk/custom/user-service.service';

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.page.html',
  styleUrls: ['./userlogin.page.scss'],
})
export class UserloginPage implements OnInit {
  email: any;
  password: any;
  loading: boolean;

  constructor(private router: Router,private userServiceService : UserServiceService) { }

  ngOnInit() {
  }
  save() {
    console.log("Hii");
    const loginData = {
      email:this.email,
      password:this.password
    }
     
   
    console.log('loginData', loginData);
    // we need to send this data to our node.js server

    this.userServiceService.userLogin(loginData).subscribe(
      data => {
        console.log('got response from server', data);
        this.loading = false;
      // this.authService.saveTokenToStorage(data.token);
        //this.router.navigateByUrl('/dealer-dashboard');
        this.router.navigateByUrl('/home');
      // href='/dealer-dashboard';
      },
      error => {
        this.loading = false;
        console.log('error', error);
      }
    );
  }

}
