import { Component, OnInit } from '@angular/core';
import { LiveBiddingService } from '../sdk/custom/live-bidding.service';

@Component({
  selector: 'app-customer-bidding-session',
  templateUrl: './customer-bidding-session.page.html',
  styleUrls: ['./customer-bidding-session.page.scss'],
})
export class CustomerBiddingSessionPage implements OnInit {
  dataz;
 car;

  constructor(private liveBiddingService:LiveBiddingService) { 

    this.liveBiddingService.newsessio()//through socket
  .subscribe(data=> {this.dataz=data;console.log("info:");this.car =this.dataz.targetCar ;console.log(this.dataz)});
  
  }

  ngOnInit() {
    this.joinnew()
  }
  joinnew(){
    this.liveBiddingService.NewJoin(); 
}
}
