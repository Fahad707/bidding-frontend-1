import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarsService } from '../sdk/custom/cars.service';
import { AuthService } from '../sdk/core/auth.service';
import { BiddingServiceService } from '../sdk/custom/bidding-service.service';
import { UserServiceService } from '../sdk/custom/user-service.service';
import { DealerService } from '../sdk/custom/dealer.service';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-lease-deals',
  templateUrl: './lease-deals.page.html',
  styleUrls: ['./lease-deals.page.scss'],
})
export class LeaseDealsPage implements OnInit {

  cars: [];
  carid;
  sub;
  noofcarsrows;
  carstype: any;
  lease: number;
  name: any;
  changeText: boolean;
  letter: any;
  role: any;
  login: any;
  info: any;
  constructor(private carsService :CarsService,private storage: Storage,private authService:AuthService,private biddingServiceService:BiddingServiceService,private dealerService : DealerService,private activateRouter:ActivatedRoute) { }

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
    this.getAll();
  
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




  
    async getAll() {
    
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
