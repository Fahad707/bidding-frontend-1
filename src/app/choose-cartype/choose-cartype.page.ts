import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CarsService } from '../sdk/custom/cars.service';
import { BiddingServiceService } from '../sdk/custom/bidding-service.service';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { Storage } from '@ionic/storage';
import { DealerService } from '../sdk/custom/dealer.service';
import { UserServiceService } from '../sdk/custom/user-service.service';
import { AuthService } from '../sdk/core/auth.service';
@Component({
  selector: 'app-choose-cartype',
  templateUrl: './choose-cartype.page.html',
  styleUrls: ['./choose-cartype.page.scss'],
})
export class ChooseCartypePage implements OnInit {
  carid:String;
  sub;
  type;//new or used
  onedata: any;
  model: any;
  cash;
  lease;
  New;
  NnU;
  manual;
  automatic;
  name: any;
  changeText: boolean;
  letter: any;
  role: any;
  login: any;
  info: any;
  neww=1;
  constructor(private authService:AuthService,
    private userServiceService : UserServiceService,
    private dealerService : DealerService,
    private carsService:CarsService,
    private router: Router,private storage: Storage,
    private activateRouter:ActivatedRoute,
    private biddingServiceService:BiddingServiceService) { }

  async ngOnInit() {
        this.sub = this.activateRouter.queryParams
    .subscribe(params => {
      // Defaults to 0 if no query param provided.
      this.carid = params.car;
      this.model=params.model;
      console.log("carid:");
      console.log(this.carid);
    });
  
   
    this.exec();
 this.name = await this.storage.get('username');
 console.log(this.name);
 
 this.changeText = false;

 this.letter=this.name[0];

 this.letter=this.letter.toUpperCase()

 console.log(this.letter);
 
this.getAllnotifications();
 this.checkrole()
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
  this.storage.set('bidtypeconfigured','cash');
 
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


  oncash(event:MatCheckboxChange): void {
    if(event.checked){ this.lease=false;console.log("lease to false")}
    this.storage.set('bidtypeconfigured','cash');
  }
  leased(event:MatCheckboxChange): void {
    if(event.checked){ this.cash=false;console.log("cash to false")}
    this.storage.set('bidtypeconfigured','lease');
    if(this.neww==0){this.lease=false;}
  }
  onnew(event:MatCheckboxChange): void {
    if(event.checked){ this.NnU=false;this.neww=1;console.log("old to false")}
    this.storage.set('cartypeconfigured','new');
  }
  onold(event:MatCheckboxChange): void {
    if(event.checked){ this.New=false;console.log("new to false")
    this.neww=0;this.lease=false;
    this.storage.set('bidtypeconfigured','cash');
  }
    this.storage.set('cartypeconfigured','used');
  }
  onauto(event:MatCheckboxChange): void {
    this.storage.remove('cartransmissionconfigureda');
    this.storage.set('cartransmissionconfigureda','automatic');
  }
  onm(event:MatCheckboxChange): void {
    this.storage.remove('cartransmissionconfiguredm');
    this.storage.set('cartransmissionconfiguredm','manual');
  }
  async postType(carid) {
    var bidtype = await this.storage.get('bidtypeconfigured');
    var type = await this.storage.get('cartypeconfigured');
    console.log(bidtype,type);
    const observable = await this. biddingServiceService.carType(type,carid,bidtype);
    console.log(this.carid);
    observable.subscribe(
      data => {
        this.onedata = data.data;
        console.log('onedata', data.data);
        this.router.navigate(['/choose-cartrim'],{ queryParams: { car:carid }});
      },
      err => {
        console.log('err', err);
      }
    );
  }
}
