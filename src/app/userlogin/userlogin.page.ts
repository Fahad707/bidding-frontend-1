import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from '../sdk/custom/user-service.service';
import { AuthService } from '../sdk/core/auth.service';
import { Storage } from '@ionic/storage';
import {MatSnackBar} from '@angular/material/snack-bar';



@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.page.html',
  styleUrls: ['./userlogin.page.scss'],
})
  export class UserloginPage implements OnInit {
  email: any;
  password: any;
  loading: boolean;
  login = null;
  er;
  username;
  message:"Successfully logged in"
  action:""
  
  constructor(private _snackBar: MatSnackBar,private storage: Storage,private router: Router,private authService : AuthService ,private userServiceService : UserServiceService) { }

  ngOnInit() {
  }




  save() {
    this.storage.set('login', this.login);
    console.log("Hii");
    const loginData = {
      email:this.email,
      password:this.password
    }
    console.log('loginData', loginData);
    // we need to send this data to our node.js server
    this.userServiceService.userLogin(loginData).subscribe(
      data => {
        this._snackBar.open("Successfuly logged in" ,"User  : " + data.data.username, {
          duration: 2500,
        });
        this.loading = false;
        this.login = 1;
        this.er=0;
        this.username = data.data.username;
        this.storage.remove('username');
        this.storage.set('username', this.username);
        this.storage.set('login', this.login);
        this.storage.set('role',1);
        this.authService.saveTokenToStorage(data.token);
        // this.router.navigateByUrl('/dealer-dashboard');
        this.router.navigateByUrl('/home');
      // href='/dealer-dashboard';
      },
      error => {
        this.er=1;
        this.loading = false;
        console.log('error', error);
      }
    );
  }


}