import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarsService } from '../sdk/custom/cars.service';
import { BiddingServiceService } from '../sdk/custom/bidding-service.service';

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
  constructor(private activateRouter:ActivatedRoute,private biddingServiceService:BiddingServiceService) { }

  async ngOnInit() {
        this.sub = this.activateRouter.queryParams
    .subscribe(params => {
      // Defaults to 0 if no query param provided.
      this.carid = params.car;
      console.log("carid:");
      console.log(this.carid);
    });
    this.postType(this.type,this.carid);
  }
  async postType(type,carid) {
    const observable = await this. biddingServiceService.carType(type,carid);
    console.log(this.carid);
    observable.subscribe(
      data => {
        this.onedata = data.data;
        console.log('onedata', data.data);
      },
      err => {
        console.log('err', err);
      }
    );
  }
}
