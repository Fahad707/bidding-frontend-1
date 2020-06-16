import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders } from '@angular/common/http';
import { Autodeal } from '../autodeal.config';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class DealerService {

  constructor(private http: HttpClient) { }

  public dealerLogin(credentials: object): Observable<any> {
    // this url will be http://localhost:3000/users/login
    console.log(credentials)
    console.log("new")
    const url =Autodeal.getPath() + '/dealerships/login';
    return this.http.post(url, credentials);
  }
  
}
