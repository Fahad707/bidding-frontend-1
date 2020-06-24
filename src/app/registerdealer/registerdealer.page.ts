import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DealerService } from '../sdk/custom/dealer.service';

@Component({
  selector: 'app-registerdealer',
  templateUrl: './registerdealer.page.html',
  styleUrls: ['./registerdealer.page.scss'],
})
export class RegisterdealerPage implements OnInit {

  constructor(private router: Router,private dealerService : DealerService) { }
  loading = false;
  name;
  password;
  street;
  city;
  state;
  zipcode;
  phone;
  email;

  ngOnInit() {
  }
save() {
  const regData = {
    Name:this.name,
    password:this.password,
    street:this.street,
    city:this.city,
    state:this.state,
    zip:this.zipcode,
    Phone:this.phone,
    Email:this.email
  }

    this.loading = true;

    this.dealerService.userRegister(regData).subscribe(
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