import { Component } from '@angular/core';
import { AuthService } from '../sdk/core/auth.service';
import { Storage } from '@ionic/storage';
import { CarsService } from '../sdk/custom/cars.service';
import { BiddingServiceService } from '../sdk/custom/bidding-service.service';


@Component({
  selector: 'app-home', 
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
login;
name;
toshow;
letter;
changeText: boolean;
cars: [];
  carid;
  sub;
  noofcarsrows;
  the_data: any;
  flag;
  slideOpts = { 
    initialSlide: 4, 
    speed: 350, 
    effect: 'flip', 
    }; 
  role: any;
  info: any;


  constructor(private storage: Storage,private authService:AuthService,private carsService:CarsService,private biddingServiceService:BiddingServiceService) {}
async ngOnInit(){
 this.exec();
 this.name = await this.storage.get('username');
 console.log(this.name);
 
 this.changeText = false;

 this.letter=this.name[0];

 this.letter=this.letter.toUpperCase()

 console.log(this.letter);
 this.getAll();
 this.getAllnotifications();
 this.checkrole()
}
ne(){
this.toshow=1
}

logoutt(){
   this.authService.logout();
 }
 async exec(){
 this.login = await this.storage.get('login');
 console.log(this.login);


}


async checkrole(){

  this.role = await this.storage.get('role');
  console.log("role");
  console.log(this.role);
  console.log(typeof this.role);

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

//*************************************************************************** */
//*************************************************************************** */
 
 async getAll() {
    
  const observable = await this.carsService.getAllcars();
  observable.subscribe(
    async data => {
      this.flag = await this.storage.get('flag');
      console.log(this.flag)
       console.log(typeof this.flag)
      if(this.flag=="1"){
        console.log("recommendations hit"+data.recommendations)
      this.the_data = data.recommendations; } 
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
