import { Component, OnInit } from '@angular/core';
import { CarsService  } from '../sdk/custom/cars.service' 
import { ActivatedRoute } from '@angular/router';
import { UserServiceService } from '../sdk/custom/user-service.service';
import { BiddingServiceService } from '../sdk/custom/bidding-service.service';
import { AuthService } from '../sdk/core/auth.service';
import { DealerService } from '../sdk/custom/dealer.service';
import { Storage } from '@ionic/storage';
@Component({
  selector: 'app-display-cars',
  templateUrl: './display-cars.page.html',
  styleUrls: ['./display-cars.page.scss'],
})
export class DisplayCarsPage implements OnInit {
  cars: [];
  carid;
  sub;
  noofcarsrows;
  carstype: any;
  lease: number;
  role: any;
  name: any;
  changeText: boolean;
  letter: any;
  info: any;
  login: any;
  constructor(private storage: Storage,private authService:AuthService,
    private biddingServiceService:BiddingServiceService,
    private userServiceService : UserServiceService,
    private dealerService : DealerService,
    private activateRouter:ActivatedRoute,private carsService:CarsService) { }

  async ngOnInit() {
    
    this.exec();
 this.name = await this.storage.get('username');
 console.log(this.name);
 
 this.changeText = false;

 this.letter=this.name[0];

 this.letter=this.letter.toUpperCase()

 console.log(this.letter);
 
this.getAllnotifications();
 this.checkrole()
    this.getAllc();
  
  }
  
  async logoutt(){
    this.authService.logout();
 }

 
async checkrole(){

  this.role = await this.storage.get('role');
  console.log("role");
  console.log(this.role);
  console.log(typeof this.role);

}
async exec(){
  this.login = await this.storage.get('login');
  console.log(this.login);
 
 
 }
  async getAllnotifications() {
    
    const observable = await this.biddingServiceService.getAll();
    observable.subscribe(
      data => {
        this.info = data.data;
        console.log('data.data', data.data);
      },
      err => {
        console.log('err', err);
      }
    );
  }
  
    async getAllc() {
    
      const observable = await this.carsService.getAllcars();
      observable.subscribe(
        data => {
        
          this.cars = data.data;
          console.log("cars:")
          console.log(data.data);
          if(this.cars.length%3==0){
          this.noofcarsrows=this.cars.length/3}
        },
        err => {
          console.log('err', err);
        }
      );
    }

}
