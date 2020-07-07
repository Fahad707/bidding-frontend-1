import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders } from '@angular/common/http';
import { Autodeal } from '../autodeal.config';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http: HttpClient) { }

  public userLogin(credentials: object): Observable<any> {
    // this url will be http://localhost:3000/users/login
    const url =Autodeal.getPath() + '/users/login';
    return this.http.post(url, credentials);
  }
  public userRegister(credentials: object): Observable<any> {
    // this url will be http://localhost:3000/users/login
    const url =Autodeal.getPath() + '/users/register';
    console.log("route hit")
    return this.http.post(url, credentials);
  }
  public userLogout(credentials: object): Observable<any> {
    const url =Autodeal.getPath() + '/users/logout';
    console.log(url);
    return this.http.post(url,credentials);
  }
}
