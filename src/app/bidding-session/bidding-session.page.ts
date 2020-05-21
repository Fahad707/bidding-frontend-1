import { Component, OnInit } from '@angular/core';
import { BiddingServiceService } from '../sdk/custom/bidding-service.service';
import { LiveBiddingService } from '../sdk/custom/live-bidding.service';
import {ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-bidding-session',
  templateUrl: './bidding-session.page.html',
  styleUrls: ['./bidding-session.page.scss'],
})
export class BiddingSessionPage implements OnInit{
sessionid;
sub;
onedata;
messageText:String;
messageArray:Array<{message:String}> = [];
  user: any;
  dataz;

constructor(private activateRouter:ActivatedRoute,private biddingServiceService:BiddingServiceService,private liveBiddingService:LiveBiddingService) 
{  this.liveBiddingService.newMessageReceived()
  .subscribe(data=>{this.messageArray.push(data);console.log("OOOOOOOOOOOOOOOO"+this.messageArray)}); 

  
  this.liveBiddingService.newUserJoined()
  .subscribe(data=> {this.dataz=data;console.log(this.dataz)});
  
}

async ngOnInit() {
    this.sub = this.activateRouter.queryParams
      .subscribe(params => {
        // Defaults to 0 if no query param provided.
        this.sessionid = params;
      });
      this.join(this.sessionid)
      //this.getAll(this.sessionid);
}

sendMessage()
{
//  this.liveBiddingService.sendMessage({room:this.sessionid, message:this.messageText});
//   console.log("messageText:"+this.messageText)
this.liveBiddingService.sendMessage({room:'5ebe96df4511ee2e3c565554', message:this.messageText});
  console.log("messageText:"+this.messageText)
    this.messageText="";
}

  async getAll(sessionid) {
    const observable = await this.biddingServiceService.getAllByid(sessionid);
    observable.subscribe(
      data => {
        this.onedata = data.data;
        console.log('onedata', data.data);
        console.log("OOOO88888OOOOOOOOO8888OOOOOOOO8888OOOOOOOOOOO8888OOOOOOOOOOOOOO8888OOOOOO");
      },
      err => {
        console.log('err', err);
      }
    );
  }

  join(sessionid){
  
    this.liveBiddingService.ExistingRoomJoin({room:sessionid});
    console.log("id::::::::"+sessionid);
}
}
//make a function that takes the specific bidding instance from the db 
//by its id from url params.......
//put that function in ngoninit 
//like book detail uses its id..............