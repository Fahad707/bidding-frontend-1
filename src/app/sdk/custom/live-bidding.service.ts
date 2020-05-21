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
    console.log("emitted to server")
    this.socket.emit('joining',data);
    
  }


  newUserJoined()
  {
      let observable = new Observable<{biddingInfo:String}>(observer=>{
          this.socket.on('Thebiddnginfo', (data)=>{
              observer.next(data);
              console.log("@@@@@@#####################$$$$$$$");
              console.log(data);
          });
          return () => {this.socket.disconnect();}
      });

      return observable;
  }

  newsession()
  {
      let observable = new Observable<{biddingInfo:String}>(observer=>{
          this.socket.on('newsession', (data)=>{
              observer.next(data);
              console.log("@@@@@@#####################$$$$$$$$$$%%%%%%%%%%%%%%::::"+data)
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

newMessageReceived(){
    let observable = new Observable<{message:String}>(observer=>{
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
