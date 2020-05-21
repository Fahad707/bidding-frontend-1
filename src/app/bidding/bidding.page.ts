import { Component, OnInit } from '@angular/core';
import { BiddingServiceService  } from '../sdk/custom/bidding-service.service' 
import { LiveBiddingService } from '../sdk/custom/live-bidding.service';
@Component({
  selector: 'app-bidding',
  templateUrl: './bidding.page.html',
  styleUrls: ['./bidding.page.scss'],
})
export class BiddingPage implements OnInit {
sessions = 1;
loading = false;
deleteLoading = false;
biddings;
dataz;

constructor(private biddingServiceService:BiddingServiceService,private liveBiddingService:LiveBiddingService) { 
  
    // this.liveBiddingService.newUserJoined()
    // .subscribe(data=> {this.dataz=data});
    
}

async ngOnInit() {

  this.getAll();

}


  async getAll() {
    this.loading = true;
    const observable = await this.biddingServiceService.getAllBooks();
    observable.subscribe(
      data => {
        this.biddings = data.data;
        this.loading = false;
        console.log(data.data);
        console.log("OOOO88888OOOOOOOOO8888OOOOOOOO8888OOOOOOOOOOO8888OOOOOOOOOOOOOO8888OOOOOO");
      },
      err => {
        console.log('err', err);
      }
    );
  }
  
//   join(id){
  
//     this.liveBiddingService.ExistingRoomJoin({room:id});
//     console.log("id::::::::"+id);
// }

}




