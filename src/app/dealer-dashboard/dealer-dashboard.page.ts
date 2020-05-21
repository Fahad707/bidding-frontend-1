import { Component, OnInit } from '@angular/core';
import { BiddingServiceService } from '../sdk/custom/bidding-service.service';

@Component({
  selector: 'app-dealer-dashboard',
  templateUrl: './dealer-dashboard.page.html',
  styleUrls: ['./dealer-dashboard.page.scss'],
})
export class DealerDashboardPage implements OnInit {

info;

constructor(private biddingServiceService:BiddingServiceService) { }
  
async ngOnInit() {
  this.getAll();
}

  async getAll() {
    
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
}
