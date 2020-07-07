import { Component, OnInit } from '@angular/core';
import { BiddingServiceService } from '../sdk/custom/bidding-service.service';
import { LiveBiddingService } from '../sdk/custom/live-bidding.service';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';
@Component({
  selector: 'app-acceptlist',
  templateUrl: './acceptlist.page.html',
  styleUrls: ['./acceptlist.page.scss'],
})
export class AcceptlistPage implements OnInit {

  sessions = 1;
loading = false;
deleteLoading = false;
biddings;
dataz;

constructor(private router: Router,private storage: Storage,private biddingServiceService:BiddingServiceService,private liveBiddingService:LiveBiddingService) { 
  
    // this.liveBiddingService.newUserJoined()
    // .subscribe(data=> {this.dataz=data});
    
}

async ngOnInit() {

  this.getAll();

}


  async getAll() {
    this.loading = true;
    const observable = await this.biddingServiceService.getAllAccepted();
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
  //  console.log(bidding);
    this.storage.set('abidding',bidding)
    const am = await this.storage.get("abidding")
    console.log(am.cust +" "+am.date);
    console.log("____________________________________________");
    this.router.navigateByUrl('/invoice');
  }

//   join(id){
  
//     this.liveBiddingService.ExistingRoomJoin({room:id});
//     console.log("id::::::::"+id);
// }


}
