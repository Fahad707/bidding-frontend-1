import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BiddingServiceService } from '../sdk/custom/bidding-service.service';
import { LiveBiddingService } from '../sdk/custom/live-bidding.service';
import { Storage } from '@ionic/storage';
@Component({
  selector: 'app-customer-accept-list',
  templateUrl: './customer-accept-list.page.html',
  styleUrls: ['./customer-accept-list.page.scss'],
})
export class CustomerAcceptListPage implements OnInit {
  sessions = 1;
  loading = false;
  deleteLoading = false;
  biddings;
  dataz;
    price: any;
  
  constructor(private router: Router,private storage: Storage,private biddingServiceService:BiddingServiceService,private liveBiddingService:LiveBiddingService) { 
    
      // this.liveBiddingService.newUserJoined()
      // .subscribe(data=> {this.dataz=data});
      
  }
  
  async ngOnInit() {
  
    this.getAll();
  
  }
  
  
    async getAll() {
      this.loading = true;
      const observable = await this.biddingServiceService.getAllCustomerAccepted();
      observable.subscribe(
        data => {
          this.biddings = data.data;
          this.loading = false;
          console.log("{{{{{{{{{{{{{{{{{{{{}}}}}}}}}}}}}}}}}}}}}")
          console.log(data.data);
          console.log("OOOO88888OOOOOOOOO8888OOOOOOOO8888OOOOOOOOOOO8888OOOOOOOOOOOOOO8888OOOOOO");
        },
        err => {
          console.log('err', err);
        }
      );
    }
    
    async invoice(bidding){
      console.log("____________________________________________");
      console.log(bidding);
      console.log("____________________________________________");
      this.storage.set('acustomerbidding',bidding)
      const am = await this.storage.get("acustomerbidding")
      console.log(am.cust +" "+am.date);
      
      this.router.navigateByUrl('/invoice');
    }
  
  //   join(id){
    
  //     this.liveBiddingService.ExistingRoomJoin({room:id});
  //     console.log("id::::::::"+id);
  // }
  
}
