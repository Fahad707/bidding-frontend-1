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
flag=0;
  id: any;

  constructor(private liveBiddingService:LiveBiddingService) { 

    this.liveBiddingService.newsessio()//through socket
  .subscribe(data=> {this.dataz=data;console.log("new");console.log(this.dataz);this.id=this.dataz.id;this.car = this.dataz.biddingInfo.targetCar;console.log("type "+typeof this.dataz)});
  
  }

  ngOnInit() {
    
    this.joinnew();
    
  }
  joinnew(){
    this.liveBiddingService.NewJoin(); 
}
}
