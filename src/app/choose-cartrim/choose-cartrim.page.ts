import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarsService } from '../sdk/custom/cars.service';
import { BiddingServiceService } from '../sdk/custom/bidding-service.service';

@Component({
  selector: 'app-choose-cartrim',
  templateUrl: './choose-cartrim.page.html',
  styleUrls: ['./choose-cartrim.page.scss'],
})
export class ChooseCartrimPage implements OnInit {
  loading = 'true';
  carid;
  sub;
  onedata: any;
  constructor(private activateRouter:ActivatedRoute,private biddingServiceService:BiddingServiceService) { }

  async ngOnInit() {
        this.sub = this.activateRouter.queryParams
    .subscribe(params => {
      // Defaults to 0 if no query param provided.
      this.carid = params;
    });
    this.gettrim(this.carid.car);
  }
  async gettrim(carid) {
    this.loading = 'true';
    const observable = await this.biddingServiceService.gettrim(carid);
    observable.subscribe(
      data => {
        this.loading = 'false';
        this.onedata = data.data;
        console.log('Trims data', data.data);
      },
      err => {
        console.log('err', err);
      }
    );
  }
}
