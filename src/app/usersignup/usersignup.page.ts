import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from '../sdk/custom/user-service.service';

@Component({
  selector: 'app-usersignup',
  templateUrl: './usersignup.page.html',
  styleUrls: ['./usersignup.page.scss'],
})
export class UsersignupPage implements OnInit {
  loading: boolean;

  constructor(private router: Router,private userServiceService : UserServiceService) { }
name;
email;
password;
  ngOnInit() {
  }
  save() {
    const regData = {
      name:this.name,
      email:this.email,
      password:this.password,

    }
  
      this.loading = true;
  
      this.userServiceService.userRegister(regData).subscribe(
        data => {
          console.log('got response from server', data);
          this.loading = false;
          this.router.navigateByUrl('/home');
        },
        error => {
          this.loading = false;
          console.log('error', error);
        }
      );
    
  }
}
