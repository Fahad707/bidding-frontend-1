import { Component, OnInit } from '@angular/core';
import { LiveBiddingService } from '../sdk/custom/live-bidding.service';
import { BiddingServiceService } from '../sdk/custom/bidding-service.service';

@Component({
  selector: 'app-engine',
  templateUrl: './engine.page.html',
  styleUrls: ['./engine.page.scss'],
})
export class EnginePage implements OnInit {
  biddings;
  user;
  constructor(private biddingServiceService:BiddingServiceService,private liveBiddingService:LiveBiddingService) { }

  ngOnInit() {

  }
  
  createNewSession()
  {
    this.biddingServiceService.startBidding(this.user).subscribe(
      data => {
        console.log('got response from server', data);        
      },
      error => {
        console.log('error', error);
      }
    );
    this.liveBiddingService.NewJoin();  
  }

}
