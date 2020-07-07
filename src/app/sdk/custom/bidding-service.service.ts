import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders } from '@angular/common/http';
import { Autodeal } from '../autodeal.config';
import { Observable } from 'rxjs';
import { AuthService } from '../core/auth.service';
@Injectable({
  providedIn: 'root'
})
export class BiddingServiceService {
 

  constructor(private authService : AuthService,private http: HttpClient) { }

  public async getAllBooks(): Promise<any> {
    const url =Autodeal.getPath() + '/bidding/DealerView';
    return this.http.get(url);
  }


  public async getAllAccepted(): Promise<any> {
    const url =Autodeal.getPath() + '/bidding/DealerView/Accepted';
    return this.http.get(url);
  }
  

  public async getAllforCustomer(): Promise<any> {
    const url =Autodeal.getPath() + '/bidding/view';
    return this.http.get(url);
  }
  
  public async getAllByid(sessionid): Promise<any> {
    const url =Autodeal.getPath() + `/bidding/DealerView/${sessionid}`;
    return this.http.get(url);
  }
  public async getAll(): Promise<any> {
    const url =Autodeal.getPath() + '/dealerships';
    return this.http.get(url);
  }
  public startBidding(credentials: object): Observable<any> {
    const url =Autodeal.getPath() + '/bidding/start';
    return this.http.post(url,credentials);
  }
  public async carType(Type:String,id:String): Promise<any> {
    const url =Autodeal.getPath() +  `/bidding/configure_car/${Type}/${id}`;
    const token = await this.authService.getTokenFromStorage();
    console.log("token>>>"+token)
    return this.http.post(url, {
      headers: new HttpHeaders().set('Authorization', token)
    });
  }
  public async gettrim(sessionid): Promise<any> {
    const url =Autodeal.getPath() + `/bidding/configure_car/trims/${sessionid}`;
    return this.http.get(url);
  }
  public async getengine(sessionid): Promise<any> {
    const url =Autodeal.getPath() + `/bidding/configure_car/${sessionid}/engine`;
    return this.http.get(url);
  }
}

