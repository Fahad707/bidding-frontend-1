import { Injectable } from '@angular/core';
import { Autodeal } from '../autodeal.config';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CarDealsService {

  constructor(private http: HttpClient) { }

  public async getAlldeals(): Promise<any> {
    const url =Autodeal.getPath() + '/Deals';
    return this.http.get(url);
  }
  public async getdealsbymake(make): Promise<any> {
    const url =Autodeal.getPath() + `/Deals/${make}`;
    return this.http.get(url);
  }
}
