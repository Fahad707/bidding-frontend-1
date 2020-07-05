import { Component, OnInit } from '@angular/core';
import { BiddingServiceService } from '../sdk/custom/bidding-service.service';
import { LiveBiddingService } from '../sdk/custom/live-bidding.service';
import {ActivatedRoute} from '@angular/router';
import { Storage } from '@ionic/storage';
import {Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
export interface DialogData {
  price: string;
  incentive: string;
}


@Component({
  selector: 'app-bidding-session',
  templateUrl: './bidding-session.page.html',
  styleUrls: ['./bidding-session.page.scss'],
})
export class BiddingSessionPage implements OnInit{
  price: string;
  year;
sessionid:String;
sub;
onedata;
messageText:String;
messageArray:Array<{message:any}> = [];
  user: any;
  dataz;
offer;
cust : false;
role;
headerRow: [ 'AutoDeal offer', 'You save']
  animal: any;
  uname: any;
  email: any;
  phone: any;
  street: any;
  city: any;
  state: any;
  zip: any;
  id: any;
  incentive: any;
  msg;
  ll:'';
  date;
  time;
  delivery: any;


constructor(public dialog: MatDialog,private storage: Storage,private activateRouter:ActivatedRoute,private biddingServiceService:BiddingServiceService,private liveBiddingService:LiveBiddingService) 
{  this.liveBiddingService.newMessageReceived().subscribe(datax=>{/*this.msg=datax;this.ll=datax.message;
    */this.messageArray.push(datax);console.log("OOOOOOOOOOOOOOOO "+this.messageArray);
    console.log(datax);console.log(typeof datax.message);console.log(datax.incentive);
    var d = new Date(); // for now
    d.getHours();
    d.getMinutes();
    d.getSeconds();
    this.time = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1;
    var yyyy = today.getFullYear();

    if (dd < 10) {
      var ddd = "0" + dd;
    }
    if (mm < 10) {
      var mmm = "0" + mm;
    }
    this.date = mmm + "/" + ddd + "/" + yyyy;
  }); 

  
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

sendMessage(price,info,incentive1,tdelivery)
{
//  this.liveBiddingService.sendMessage({room:this.sessionid, message:this.messageText});
//   console.log("messageText:"+this.messageText)
this.liveBiddingService.sendMessage({room:this.sessionid,message:price,dealerInfo:info,incentive:incentive1,delivery:tdelivery});
 console.log("messageText:"+incentive1)
  console.log(this.sessionid)
    this.messageText="";
}

openDialog(){
  const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
    width: '350px',
    data: {price: this.price, incentive: this.incentive}
  });

  dialogRef.afterClosed().subscribe(async result => {
    console.log('The dialog was closed');
    if(result.price && result.incentive){
    this.price = result.price;
    this.incentive = result.incentive;
    this.delivery =  result.checked;
    console.log(result);
    console.log("***********^<^><^>^<<><><><>><><><><><><><><><><><><><><><><><><><>***************");
    this.uname = await this.storage.get("username");
    this.email = await this.storage.get("email");
    this.phone= await this.storage.get("phone");
    this.street = await this.storage.get("street");
    this.city= await this.storage.get("city");
    this.state = await this.storage.get("state");
    this.zip = await this.storage.get("zip");
    this.id = await this.storage.get("id");
    
    const dealerInfo ={
      uname : this.uname ,
      email :this.email,
      phone:this.phone,
      street:this.street ,
      city:this.city,
      state:this.state,
      zip:this.zip,
      id:this.id
      
    }
   console.log("<      <  <street>  >     >")
   console.log(this.street);
   console.log(dealerInfo);
   this.sendMessage(this.price,dealerInfo,this.incentive,this.delivery)
    }
  });
}
  // incentive(price: string, dealerInfo: { uname: any; email: any; phone: any; street: any; city: any; state: any; zip: any; id: any; }, incentive: any) {
  //   throw new Error("Method not implemented.");
  // }


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

@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'dialog-overview-example-dialog.html',
})
export class DialogOverviewExampleDialog {

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
  

}