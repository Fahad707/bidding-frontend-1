import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LiveBiddingService {

  constructor() { }
 private socket = io('http://localhost:3000');
  NewJoin()
  {
      this.socket.emit('Create&Join');
  }
  ExistingRoomJoin(data)
  {
    console.log("emitted to server"+data.room)
    this.socket.emit('joining',data);
    
  }
  newUserJoined()
  {
      let observable = new Observable<{biddingInfo:Object}>(observer=>{
          this.socket.on('Thebiddnginfo', (data)=>{
              observer.next(data);
              console.log("@@@@@@#####################$$$$$$$");
              console.log(data);
          });
          return () => {this.socket.disconnect();}
      });

      return observable;
  }
  newsessio()
  {
      let observable = new Observable<{biddingInfo:Object,id:any}>(observer=>{
          this.socket.on('newsession', (data)=>{
              observer.next(data);
              console.log("@@@@@@#####################$$$$$$$$$$%%%%%%%%%%%%%%::::"+data)
              console.log(data.id)
          });
          return () => {this.socket.disconnect();}
      });

      return observable;
  }
sendMessage(data)
{
    // console.log("sendMessage(data):");
    // console.log(data.message);
    this.socket.emit('message',data);
}

OfferAccepted(data)
{
    // console.log("sendMessage(data):");
    // console.log(data.message);
    console.log('in OfferAccepted');
    this.socket.emit('offerAccepted',data);
    
}

// AcceptMessage(){
//     let observable = new Observable<{acceptInfo:Object}>(observer=>{
//         this.socket.on('AcceptInfo', (data)=>{
//             observer.next(data);
//             console.log("!!!!!!!!!!~~~~~~~~~~~~~~`````````newMessageReceived from AcceptMessag~~~~~~~~~~`````````");
//             console.log(data);
//             console.log(data)
//         });
//         return () => {this.socket.disconnect();}
//     });
//     return observable;
// }AcceptInfo

AcceptMessage(){
    let observable = new Observable<{dealername:any,price:any}>(observer=>{
        this.socket.on('AcceptInfo', (data)=>{
            observer.next(data);
            console.log("!!!!!!!!!!~~~~~~~~~~~~~~`````````newMessageReceived from AcceptMessag~~~~~~~~~~`````````");
            console.log(data);
            console.log(data)
        });
        return () => {this.socket.disconnect();}
    });
    return observable;
}

newMessageReceived(){
    let observable = new Observable<{message:any,dinfo:Object,
        incentive:any,delivery:Boolean,monthly_due:any,Initial_Payment:any,Contract_length:any,  Max_miles_year:any}>(observer=>{
        this.socket.on('new message', (data)=>{
            observer.next(data);
            console.log("newMessageReceived");
            console.log(data);
        });
        return () => {this.socket.disconnect();}
    });
    return observable;
}
}
