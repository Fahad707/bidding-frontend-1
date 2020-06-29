import { Component, OnInit } from '@angular/core';

import { DealerService } from '../sdk/custom/dealer.service';
import { Router} from '@angular/router';
import { Storage } from '@ionic/storage';
import { AuthService } from '../sdk/core/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-dealerlogin',
  templateUrl: './dealerlogin.page.html',
  styleUrls: ['./dealerlogin.page.scss']
})
export class DealerloginPage implements OnInit {
  

  constructor(private _snackBar: MatSnackBar,private authService:AuthService,private storage: Storage,private router: Router,private dealerService : DealerService) { }
  loading = false;
  name;
  password;
  login = null;
  er;
  username;
 
  ngOnInit() {
  }
  save() {
    this.storage.set('login', this.login);
    console.log("Hii");
    const loginData = {
      name:this.name,
      password:this.password
    }
     
   
    console.log('loginData', loginData);
    // we need to send this data to our node.js server

    this.dealerService.dealerLogin(loginData).subscribe(
      data => {
        this._snackBar.open("Successfuly logged in" ,"Dealer Name  : " + this.name, {
          duration: 2500,
        });
        console.log('got response from server', data);
        this.loading = false;
        this.login = 1;
        this.er=0;
        this.authService.saveTokenToStorage(data.token);
        //this.router.navigateByUrl('/dealer-dashboard');
        this.storage.set('username', this.name);
        this.storage.set('login', this.login);
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
