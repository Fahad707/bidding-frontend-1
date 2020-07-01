import { Component, OnInit } from '@angular/core';
import { LiveBiddingService } from '../sdk/custom/live-bidding.service';
import { BiddingServiceService } from '../sdk/custom/bidding-service.service';
import { ActivatedRoute } from '@angular/router';
import { Storage } from '@ionic/storage';
@Component({
  selector: 'app-engine',
  templateUrl: './engine.page.html',
  styleUrls: ['./engine.page.scss'],
})
export class EnginePage implements OnInit {
  biddings;
  user;
  the_data;
  sub: any;
  carid: String;
  onedata: any;
  constructor(private storage: Storage,private activateRouter:ActivatedRoute,private biddingServiceService:BiddingServiceService,private liveBiddingService:LiveBiddingService) { }

  async ngOnInit() {
    this.sub = this.activateRouter.queryParams
.subscribe(params => {
  // Defaults to 0 if no query param provided.
  this.carid = params.trim;

});
this.getengine(this.carid);
}
  
  createNewSession()
  {
    this.biddingServiceService.startBidding(this.user).subscribe(
      data => {
        console.log('got response from server', data);
       this.the_data = data.data;        
      },
      error => {
        console.log('error', error);
      }
    );
    this.liveBiddingService.NewJoin();  
  }

  async getengine(carid) {
    this.storage.set('flag',1);
    const observable = await this.biddingServiceService.getengine(carid);
    observable.subscribe(
      data => {
        this.onedata = data.data;
        console.log('engines data', data.data);
      },
      err => {
        console.log('err', err);
      }
    );
  }

}
