import { Component, OnInit } from '@angular/core';
import { BiddingServiceService } from '../sdk/custom/bidding-service.service';
import { LiveBiddingService } from '../sdk/custom/live-bidding.service';
import {ActivatedRoute} from '@angular/router';
import { Storage } from '@ionic/storage';
@Component({
  selector: 'app-bidding-session',
  templateUrl: './bidding-session.page.html',
  styleUrls: ['./bidding-session.page.scss'],
})
export class BiddingSessionPage implements OnInit{
sessionid:String;
sub;
onedata;
messageText:String;
messageArray:Array<{message:String}> = [];
  user: any;
  dataz;
offer;
cust : false;
role;
constructor(private storage: Storage,private activateRouter:ActivatedRoute,private biddingServiceService:BiddingServiceService,private liveBiddingService:LiveBiddingService) 
{  this.liveBiddingService.newMessageReceived()
  .subscribe(data=>{this.messageArray.push(data);console.log("OOOOOOOOOOOOOOOO"+this.messageArray)}); 

  
  this.liveBiddingService.newUserJoined()//through socket
  .subscribe(data=> {this.dataz=data;this.offer = this.dataz.offers;console.log("offer:");console.log(this.dataz)});
  
}

async ngOnInit() {
    this.sub = this.activateRouter.queryParams
      .subscribe(params => {
        // Defaults to 0 if no query param provided.

        this.sessionid = params.session_id;
        this.cust = params.user;
        console.log(this.cust);
        console.log("<<>>::>><<::<<>>")
      });
      this.join(this.sessionid)
      this.getAll(this.sessionid);//through route//currently using this
      //this.getAll(this.sessionid)
     
    }

sendMessage()
{
//  this.liveBiddingService.sendMessage({room:this.sessionid, message:this.messageText});
//   console.log("messageText:"+this.messageText)
this.liveBiddingService.sendMessage({room:this.sessionid, message:this.messageText});
  console.log("messageText:"+this.messageText)
  console.log(this.sessionid)
    this.messageText="";
}

  async getAll(sessionid) {
    this.role = await this.storage.get('role');
    console.log("role:"+this.role)
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