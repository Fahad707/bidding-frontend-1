import { Component, OnInit } from '@angular/core';
import { BiddingServiceService } from '../sdk/custom/bidding-service.service';
import { LiveBiddingService } from '../sdk/custom/live-bidding.service';
import {ActivatedRoute} from '@angular/router';
import { Storage } from '@ionic/storage';
import {Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { CarsService } from '../sdk/custom/cars.service';
import { DealerService } from '../sdk/custom/dealer.service';
import { UserServiceService } from '../sdk/custom/user-service.service';
import { AuthService } from '../sdk/core/auth.service';
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

  offeraccept:String;

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
  acceptedinfo: any;
  acceptp: String;
  acceptn: String;
  acceptid: any;
  acceptfrmmsgarr=0;
  flag: number;
  cashOfferForNew: number;
  cashOfferForlease: number;
  cd:"";
  mmpy:"";
  md: "";
  condition: string;
  initpay: any;
  bidtypez: string;
  bidz: string;
  name: any;
  changeText: boolean;
  letter: any;
  login: any;
  info: any;
  total: number;


constructor(public dialog: MatDialog,private storage: Storage,private activateRouter:ActivatedRoute,private biddingServiceService:BiddingServiceService,
  private liveBiddingService:LiveBiddingService,private authService:AuthService,private userServiceService : UserServiceService,private dealerService : DealerService,private carsService:CarsService) 
{  this.liveBiddingService.newMessageReceived().subscribe(datax=>{/*this.msg=datax;this.ll=datax.message;
    */this.messageArray.push(datax);console.log("OOOOOOOOOOOOOOOO "+this.messageArray);
    console.log(datax);console.log(datax.Contract_length);console.log("-----------------");
    var d = new Date(); // for now
    d.getHours();
    d.getMinutes();
    d.getSeconds();
    this.time = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1;
    var yyyy = today.getFullYear();
    var ddd
    if (dd < 10) {
       ddd = "0" + dd;
    }
    else{
       ddd = dd
    }
    var mmm
    if (mm < 10) {
      mmm = "0" + mm;
    }else{
      mmm = mm
   }
    this.date = mmm + "/" + ddd + "/" + yyyy;


  }); 
/////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////

this.liveBiddingService.AcceptMessage().subscribe(datax=>{/*this.msg=datax;this.ll=datax.message;
  */console.log("OOOOOOOOOOOOOOOO ");
  // console.log(datax.acceptInfo)
  
  this.acceptp = datax.price;
  this.acceptn= datax.dealername;
  this.offeraccept='1';
  console.log("~~~~~~~~~~~~accept message~~~~@@~~~~~~~~~~~~~~~")
 }); 
//////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////  
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

      this.exec();
      this.name = await this.storage.get('username');
      console.log(this.name);
      
      this.changeText = false;
     
      this.letter=this.name[0];
     
      this.letter=this.letter.toUpperCase()
     
      console.log(this.letter);
      
     this.getAllnotifications();
      this.checkrole()

      this.join(this.sessionid)
      this.getAll(this.sessionid);//through route//currently using this
      //this.getAll(this.sessionid)
      this.checkOfferNcarType();

    }




    async logoutt(){
      this.authService.logout();
    }
    
    
    async checkrole(){
    
    this.role = await this.storage.get('role');
    console.log("role");
    console.log(this.role);
    console.log(typeof this.role);
    
    }
    async exec(){
    this.login = await this.storage.get('login');
    console.log(this.login);
    
    
    }
    async getAllnotifications() {
      
      const observable = await this.biddingServiceService.getAll();
      observable.subscribe(
        data => {
          this.info = data.data;
          console.log('data.data', data.data);
        },
        err => {
          console.log('err', err);
        }
      );
    }














checkOfferNcarType(){


}



sendMessage(price,info,incentive1,tdelivery,cond,bidtype,initpay,cd,mmpy,md)
{
//  this.liveBiddingService.sendMessage({room:this.sessionid, message:this.messageText});
//   console.log("messageText:"+this.messageText)
this.liveBiddingService.sendMessage({room:this.sessionid,message:price,
  dealerInfo:info,incentive:incentive1,delivery:tdelivery,
  condition:cond,bidtype:bidtype,
  initpay:initpay,contrctdurr:cd,
  maxmipy:mmpy,mnthlydue:md});
 console.log("messageText:"+incentive1)
  console.log(this.sessionid)
    this.messageText="";
}



openDialog(){
  const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
    width: '350px',
    data : {cashOfferForlease : this.cashOfferForlease,cashOfferForNew : this.cashOfferForNew ,price: this.price, incentive: this.incentive}
  });



  dialogRef.afterClosed().subscribe(async result => {
    console.log('The dialog was closed');
   
  if(this.cashOfferForNew == 1){
    if(result.price){
    this.price = result.price;//cash
     //this.initpay=result.initpay;//lease
     this.initpay=""//empty for cash offer
    this.incentive = result.incentive;//cash
    this.delivery =  result.checked;//cash
    //this.cd=result.cd;//lease
    this.cd=""//empty for cash offer
   // this.mmpy=result.mmpy;//lease
   this.mmpy=""//empty for cash offer
    //this.md=result.md;//lease
    this.md=""//empty for cash offer
    this.condition="new";//obviously in new it will be new//cash
    this.bidtypez="cash";//obv it is cash, see outer if condition
    //this.mileage for old
    //this.modelyear for old
    //this.color for old
    console.log(result);console.log("***********^<^><^>^<<><><><>><><><><><><><><><><><><><><><><><><><>***************");
    this.uname = await this.storage.get("username"); this.email = await this.storage.get("email");
    this.phone= await this.storage.get("phone");this.street = await this.storage.get("street");
    this.city= await this.storage.get("city");this.state = await this.storage.get("state");
    this.zip = await this.storage.get("zip");this.id = await this.storage.get("id");
    
    const dealerInfo ={
      uname : this.uname ,email :this.email,phone:this.phone,street:this.street ,city:this.city,
      state:this.state,zip:this.zip,id:this.id
    }
   this.sendMessage(this.price,dealerInfo,this.incentive,
    this.delivery,this.condition,
    this.bidtypez,this.initpay,this.cd,this.mmpy,this.md)
    }
  }
  //for lease*******************************************\\\\\\\\\\\\\\\\\\\**************


  if(this.cashOfferForlease == 1){
    if(result.initpay && result.cd && result.md && result.mmpy){
    this.price = "";//cash
     this.initpay=result.initpay;//lease
     //this.initpay=""//empty for cash offer
    this.incentive = result.incentive;//cash
    this.delivery =  result.checked;//cash
    this.cd=result.cd;//lease
    //this.cd=""//empty for cash offer
    this.mmpy=result.mmpy;//lease
   //this.mmpy=""//empty for cash offer
    this.md=result.md;//lease
    //this.md=""//empty for cash offer
    this.condition="new";//obviously in new it will be new//cash
    this.bidtypez="lease";//obv it is cash, see outer if condition
    //this.mileage for old
    //this.modelyear for old
    //this.color for old
    console.log(result);console.log("***********^<^><^>^<<><><><>><><><><><><><><><><><><><><><><><><><>***************");
    this.uname = await this.storage.get("username"); this.email = await this.storage.get("email");
    this.phone= await this.storage.get("phone");this.street = await this.storage.get("street");
    this.city= await this.storage.get("city");this.state = await this.storage.get("state");
    this.zip = await this.storage.get("zip");this.id = await this.storage.get("id");
    
    const dealerInfo ={
      uname : this.uname ,email :this.email,phone:this.phone,street:this.street ,city:this.city,
      state:this.state,zip:this.zip,id:this.id
    }
   this.sendMessage(this.price,dealerInfo,this.incentive,
    this.delivery,this.condition,
    this.bidtypez,this.initpay,this.cd,this.mmpy,this.md)
    }
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
        this.flag=1;
        if( this.onedata.ended){
          this.offeraccept='1';
          // console.log("this.onedata.Accepted_offer[0]")
          // console.log(this.onedata.Accepted_offer[0].offerdetails.Price);
      if(this.onedata.BidOffersType=="lease"){
        this.acceptp = this.onedata.Accepted_offer[0].offerdetails.lease_info.monthly_due;
      }else{
          this.acceptp = this.onedata.Accepted_offer[0].offerdetails.Price;//datax.acceptInfo.dealershipName
      }this.acceptn= this.onedata.Accepted_offer[0].offerdetails.dealershipName;
          this.acceptid= this.onedata.Accepted_offer[0].offer_id
        }

        if(this.onedata.BidOffersType=="cash" && this.onedata.targetCar.Condition=="new")
        {
          this.cashOfferForNew = 1;
        }
        if(this.onedata.BidOffersType=="lease" && this.onedata.targetCar.Condition=="new")
        {
          this.cashOfferForlease = 1;
        }
console.log("%%%%$$#@#$$#@");
console.log( this.cashOfferForNew );
        console.log('onedata', data.data);
        console.log("OOOO88888OOOOOOOOO8888OOOOOOOO8888OOOOOOOOOOO8888OOOOOOOOOOOOOO8888OOOOOO");
      },
      err => {
        console.log('err', err);
      }
    );
  }


gettotal(md,IP,Cl)
{
  console.log( md+" hi hello im hit!!!!!!!!!!!!!!<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<" + Cl)
this.total = md*Cl
if(md!=undefined){
console.log(typeof IP);
var ip = Number(IP);
console.log(ip);
this.total = this.total +ip 
console.log(this.total)
}
}


accept(item){
this.acceptfrmmsgarr=item._id;
if(this.cashOfferForNew==1){
   this.bidz = "cash"
}
if(this.cashOfferForlease==1){
  this.bidz = "lease"
}
console.log(this.acceptfrmmsgarr)
console.log("^%^%^%^%^%^%^%^%^%")
console.log(item)
console.log("^%^%^%^%^%^%^%^%^%")
console.log(this.offeraccept)
this.liveBiddingService.OfferAccepted({room:this.sessionid,offerinfo:item,custid:this.onedata.customer,car:this.onedata.targetCar,cusotname:this.onedata.customername,bidz:this.bidz});

     
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
//****************************
//888888888888888888888888888888888888888888 */


// //+++++++++++++++++++++++++++++++++++++++++++++++++++++++//++++
// //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// import { Component, OnInit } from '@angular/core';
// import { BiddingServiceService } from '../sdk/custom/bidding-service.service';
// import { LiveBiddingService } from '../sdk/custom/live-bidding.service';
// import {ActivatedRoute} from '@angular/router';
// import { Storage } from '@ionic/storage';
// import {Inject} from '@angular/core';
// import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
// export interface DialogData {
//   price: string;
//   incentive: string;
// }


// @Component({
//   selector: 'app-bidding-session',
//   templateUrl: './bidding-session.page.html',
//   styleUrls: ['./bidding-session.page.scss'],
// })
// export class BiddingSessionPage implements OnInit{
//   price: string;
//   year;

//   offeraccept:String;

// sessionid:String;
// sub;
// onedata;
// messageText:String;
// messageArray:Array<{message:any}> = [];
//   user: any;
//   dataz;
// offer;
// cust : false;
// role;
// headerRow: [ 'AutoDeal offer', 'You save']
//   animal: any;
//   uname: any;
//   email: any;
//   phone: any;
//   street: any;
//   city: any;
//   state: any;
//   zip: any;
//   id: any;
//   incentive: any;
//   msg;
//   ll:'';
//   date;
//   time;
//   delivery: any;
//   acceptedinfo: any;
//   acceptp: String;
//   acceptn: String;
//   acceptid: any;
//   acceptfrmmsgarr=0;
//   flag: number;
//   cashOfferForNew: number;
//   cashOfferForlease: number;
//   cd:"";
//   mmpy:"";
//   md: "";
//   condition: string;
//   initpay: any;
//   bidtypez: string;
//   bidz: string;


// constructor(public dialog: MatDialog,private storage: Storage,private activateRouter:ActivatedRoute,private biddingServiceService:BiddingServiceService,private liveBiddingService:LiveBiddingService) 
// {  this.liveBiddingService.newMessageReceived().subscribe(datax=>{/*this.msg=datax;this.ll=datax.message;
//     */this.messageArray.push(datax);console.log("OOOOOOOOOOOOOOOO "+this.messageArray);
//     console.log(datax);console.log(typeof datax.message);console.log(datax.incentive);
//     var d = new Date(); // for now
//     d.getHours();
//     d.getMinutes();
//     d.getSeconds();
//     this.time = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
//     var today = new Date();
//     var dd = today.getDate();
//     var mm = today.getMonth() + 1;
//     var yyyy = today.getFullYear();

//     if (dd < 10) {
//       var ddd = "0" + dd;
//     }
//     if (mm < 10) {
//       var mmm = "0" + mm;
//     }
//     this.date = mmm + "/" + ddd + "/" + yyyy;
//   }); 
// /////////////////////////////////////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////////////////////////////////

// this.liveBiddingService.AcceptMessage().subscribe(datax=>{/*this.msg=datax;this.ll=datax.message;
//   */console.log("OOOOOOOOOOOOOOOO ");
//   // console.log(datax.acceptInfo)
  
//   this.acceptp = datax.price;
//   this.acceptn= datax.dealername;
//   this.offeraccept='1';
//   console.log("~~~~~~~~~~~~~~~~@@~~~~~~~~~~~~~~~")
//  }); 
// //////////////////////////////////////////////////////////////////////////////////////////////////////////
// //////////////////////////////////////////////////////////////////////////////////////////////////////////  
//   this.liveBiddingService.newUserJoined()//through socket
//   .subscribe(data=> {this.dataz=data;this.offer = this.dataz.offers;console.log("offer:");console.log(this.dataz)});
  
// }

// async ngOnInit() {
//     this.sub = this.activateRouter.queryParams
//       .subscribe(params => {
//         // Defaults to 0 if no query param provided.

//         this.sessionid = params.session_id;
//         this.cust = params.user;
//         console.log(this.cust);
//         console.log("<<>>::>><<::<<>>")
//       });


      
//       this.join(this.sessionid)
//       this.getAll(this.sessionid);//through route//currently using this
//       //this.getAll(this.sessionid)
//       this.checkOfferNcarType();
//     }


// checkOfferNcarType(){


// }



// sendMessage(price,info,incentive1,tdelivery,cond,bidtype,initpay,cd,mmpy,md)
// {
// //  this.liveBiddingService.sendMessage({room:this.sessionid, message:this.messageText});
// //   console.log("messageText:"+this.messageText)
// this.liveBiddingService.sendMessage({room:this.sessionid,message:price,
//   dealerInfo:info,incentive:incentive1,delivery:tdelivery,
//   condition:cond,bidtype:bidtype,
//   initpay:initpay,contrctdurr:cd,
//   maxmipy:mmpy,mnthlydue:md});
//  console.log("messageText:"+incentive1)
//   console.log(this.sessionid)
//     this.messageText="";
// }



// openDialog(){
//   const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
//     width: '350px',
//     data : {cashOfferForlease : this.cashOfferForlease,cashOfferForNew : this.cashOfferForNew ,price: this.price, incentive: this.incentive}
//   });



//   dialogRef.afterClosed().subscribe(async result => {
//     console.log('The dialog was closed');
   
//   if(this.cashOfferForNew == 1){
//     if(result.price){
//     this.price = result.price;//cash
//      //this.initpay=result.initpay;//lease
//      this.initpay=""//empty for cash offer
//     this.incentive = result.incentive;//cash
//     this.delivery =  result.checked;//cash
//     //this.cd=result.cd;//lease
//     this.cd=""//empty for cash offer
//    // this.mmpy=result.mmpy;//lease
//    this.mmpy=""//empty for cash offer
//     //this.md=result.md;//lease
//     this.md=""//empty for cash offer
//     this.condition="new";//obviously in new it will be new//cash
//     this.bidtypez="cash";//obv it is cash, see outer if condition
//     //this.mileage for old
//     //this.modelyear for old
//     //this.color for old
//     console.log(result);console.log("***********^<^><^>^<<><><><>><><><><><><><><><><><><><><><><><><><>***************");
//     this.uname = await this.storage.get("username"); this.email = await this.storage.get("email");
//     this.phone= await this.storage.get("phone");this.street = await this.storage.get("street");
//     this.city= await this.storage.get("city");this.state = await this.storage.get("state");
//     this.zip = await this.storage.get("zip");this.id = await this.storage.get("id");
    
//     const dealerInfo ={
//       uname : this.uname ,email :this.email,phone:this.phone,street:this.street ,city:this.city,
//       state:this.state,zip:this.zip,id:this.id
//     }
//    this.sendMessage(this.price,dealerInfo,this.incentive,
//     this.delivery,this.condition,
//     this.bidtypez,this.initpay,this.cd,this.mmpy,this.md)
//     }
//   }
//   //for lease*******************************************\\\\\\\\\\\\\\\\\\\**************


//   if(this.cashOfferForlease == 1){
//     if(result.initpay && result.cd && result.md && result.mmpy){
//     this.price = "";//cash
//      this.initpay=result.initpay;//lease
//      //this.initpay=""//empty for cash offer
//     this.incentive = result.incentive;//cash
//     this.delivery =  result.checked;//cash
//     this.cd=result.cd;//lease
//     //this.cd=""//empty for cash offer
//     this.mmpy=result.mmpy;//lease
//    //this.mmpy=""//empty for cash offer
//     this.md=result.md;//lease
//     //this.md=""//empty for cash offer
//     this.condition="new";//obviously in new it will be new//cash
//     this.bidtypez="lease";//obv it is cash, see outer if condition
//     //this.mileage for old
//     //this.modelyear for old
//     //this.color for old
//     console.log(result);console.log("***********^<^><^>^<<><><><>><><><><><><><><><><><><><><><><><><><>***************");
//     this.uname = await this.storage.get("username"); this.email = await this.storage.get("email");
//     this.phone= await this.storage.get("phone");this.street = await this.storage.get("street");
//     this.city= await this.storage.get("city");this.state = await this.storage.get("state");
//     this.zip = await this.storage.get("zip");this.id = await this.storage.get("id");
    
//     const dealerInfo ={
//       uname : this.uname ,email :this.email,phone:this.phone,street:this.street ,city:this.city,
//       state:this.state,zip:this.zip,id:this.id
//     }
//    this.sendMessage(this.price,dealerInfo,this.incentive,
//     this.delivery,this.condition,
//     this.bidtypez,this.initpay,this.cd,this.mmpy,this.md)
//     }
//   }




//   });
// }
//   // incentive(price: string, dealerInfo: { uname: any; email: any; phone: any; street: any; city: any; state: any; zip: any; id: any; }, incentive: any) {
//   //   throw new Error("Method not implemented.");
//   // }


//   async getAll(sessionid) {
//     this.role = await this.storage.get('role');
//     console.log("role:"+this.role)
//     const observable = await this.biddingServiceService.getAllByid(sessionid);
//     observable.subscribe(
//       data => {
//         this.onedata = data.data;
//         this.flag=1;

//         console.log("this.onedata.ended");
//         console.log(this.onedata.ended)
//         if( this.onedata.ended){
//           this.offeraccept='1';
//           // console.log("this.onedata.Accepted_offer[0]")
//           // console.log(this.onedata.Accepted_offer[0].offerdetails.Price);
//   this.acceptp = this.onedata.Accepted_offer[0].offerdetails.Price;//datax.acceptInfo.dealershipName
//   this.acceptn= this.onedata.Accepted_offer[0].offerdetails.dealershipName;
//   this.acceptid= this.onedata.Accepted_offer[0].offer_id
//         }

//         if(this.onedata.BidOffersType=="cash" && this.onedata.targetCar.Condition=="new")
//         {
//           this.cashOfferForNew = 1;
//         }
//         if(this.onedata.BidOffersType=="lease" && this.onedata.targetCar.Condition=="new")
//         {
//           this.cashOfferForlease = 1;
//         }
// console.log("%%%%$$#@#$$#@");
// console.log( this.cashOfferForNew );
//         console.log('onedata', data.data);
//         console.log("OOOO88888OOOOOOOOO8888OOOOOOOO8888OOOOOOOOOOO8888OOOOOOOOOOOOOO8888OOOOOO");
//       },
//       err => {
//         console.log('err', err);
//       }
//     );
//   }

// accept(item){
// this.acceptfrmmsgarr=item._id;
// if(this.cashOfferForNew==1){
//    this.bidz = "cash"
// }
// if(this.cashOfferForlease==1){
//   this.bidz = "lease"
// }
// console.log(this.acceptfrmmsgarr)
// console.log("^%^%^%^%^%^%^%^%^%")
// console.log(item)
// console.log("^%^%^%^%^%^%^%^%^%")
// console.log(this.offeraccept)
// this.liveBiddingService.OfferAccepted({room:this.sessionid,offerinfo:item,custid:this.onedata.customer,car:this.onedata.targetCar,cusotname:this.onedata.customername,bidz:this.bidz});

     
// }

//   join(sessionid){
  
//     this.liveBiddingService.ExistingRoomJoin({room:sessionid});
//     console.log("id::::::::"+sessionid);
// }




// }
// //make a function that takes the specific bidding instance from the db 
// //by its id from url params.......
// //put that function in ngoninit 
// //like book detail uses its id..............

// @Component({
//   selector: 'dialog-overview-example-dialog',
//   templateUrl: 'dialog-overview-example-dialog.html',
// })
// export class DialogOverviewExampleDialog {

//   constructor(
//     public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
//     @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

//   onNoClick(): void {
//     this.dialogRef.close();
//   }
  

// }
