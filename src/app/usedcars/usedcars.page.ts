import { Component, OnInit } from '@angular/core';
import { CarsService } from '../sdk/custom/cars.service';
import { ActivatedRoute } from '@angular/router';
import { DealerService } from '../sdk/custom/dealer.service';
import { AuthService } from '../sdk/core/auth.service';
import { BiddingServiceService } from '../sdk/custom/bidding-service.service';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-usedcars',
  templateUrl: './usedcars.page.html',
  styleUrls: ['./usedcars.page.scss'],
})
export class UsedcarsPage implements OnInit {

 
  cars: [];
  
  carid;
  sub;
  noofcarsrows;
  carstype: any;
  lease: number;
  lowestprice: any;
  showcar: any [] ;
  name: any;
  changeText: boolean;
  letter: any;
  role: any;
  login: any;
  info: any;
  
  constructor(private storage: Storage,private authService:AuthService,private biddingServiceService:BiddingServiceService,private dealerService : DealerService,
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
    var car    
    var trims;
    
      const observable = await this.carsService.getAllusedcars();
      observable.subscribe(
        data => {
        
          this.cars = data.data;
          console.log("cars:")
          console.log(data.data);
          console.log(this.cars.length);
          // for(var i=0; i<this.cars.length; i++){ //trying to get lowest price!!!

          //   car = this.cars[i];
          //   trims = car.Trims
          //   this.lowestprice=trims[0].Price;      
          //   for(var i=0; i<trims.length; i++){               
          //   if(trims[i].Price<this.lowestprice)
          //   this.lowestprice=trims[i].Price;
          //   console.log(car);
          //   console.log("$$$$$$$$$$$$$$$$$$$4")
          //   car.Trims[0].Price=this.lowestprice;
          //   this.showcar[i] = car 
          // }//inner loop
           
          // }//outer for loop

          
        },
        err => {
          console.log('err', err);
        }
      );
    }

}
