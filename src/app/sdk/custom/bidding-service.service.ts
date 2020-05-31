import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders } from '@angular/common/http';
import { Autodeal } from '../autodeal.config';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class BiddingServiceService {

  constructor(private http: HttpClient) { }

  public async getAllBooks(): Promise<any> {
    const url =Autodeal.getPath() + '/bidding/DealerView';
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
  public carType(Type:String,id:String): Observable<any> {
    const url =Autodeal.getPath() +  `/bidding/configure_car/${Type}/${id}`;
    return this.http.post(url,Type);
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

