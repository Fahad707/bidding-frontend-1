import { Component, OnInit } from '@angular/core';
import { LiveBiddingService } from '../sdk/custom/live-bidding.service';
import { BiddingServiceService } from '../sdk/custom/bidding-service.service';
import { ActivatedRoute, Router } from '@angular/router';
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
  dataz;
car;
flag=0;
  id: any;
  constructor(private router: Router,private storage: Storage,private activateRouter:ActivatedRoute,private biddingServiceService:BiddingServiceService,private liveBiddingService:LiveBiddingService) { }

  async ngOnInit() {
    this.sub = this.activateRouter.queryParams
.subscribe(params => {
  // Defaults to 0 if no query param provided.
  this.carid = params.trim;

});
this.liveBiddingService.newsessio()//through socket
  .subscribe(data=> {this.dataz=data;console.log("new");
  console.log(this.dataz);this.id=data.id;this.car = this.dataz.biddingInfo.targetCar;
  console.log("type "+typeof this.dataz);
  console.log("OCHECKOOCHECKOOCHECKO "+this.id);
  this.router.navigateByUrl('/customer-bidding')
});
 //this.router.navigate(['/bidding-session'],{ queryParams: { session_id:this.id }});});
  
this.getengine(this.carid);
}
  
  createNewSession()
  {
    this.biddingServiceService.startBidding(this.user).subscribe(
      data => {
        console.log('got response from server', data);
       this.the_data = data.data;        
        this.liveBiddingService.NewJoin();  
      },
      error => {
        console.log('error', error);
      }
    );

     
  }

  async getengine(carid) {
    console.log("getting~~engne~~data");
    console.log("~~~~carid~~~~");
    console.log(carid);
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
