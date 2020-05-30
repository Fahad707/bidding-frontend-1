import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders } from '@angular/common/http';
import { Autodeal } from '../autodeal.config';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarsService {

  constructor(private http: HttpClient) { }

  public async getAllcars(): Promise<any> {
    const url =Autodeal.getPath() + '/cars';
    return this.http.get(url);
  }
}
