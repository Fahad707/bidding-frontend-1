import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarsService } from '../sdk/custom/cars.service';

@Component({
  selector: 'app-lease-deals',
  templateUrl: './lease-deals.page.html',
  styleUrls: ['./lease-deals.page.scss'],
})
export class LeaseDealsPage implements OnInit {

  cars: [];
  carid;
  sub;
  noofcarsrows;
  carstype: any;
  lease: number;
  constructor(private activateRouter:ActivatedRoute,private carsService:CarsService) { }

  async ngOnInit() {
    
    
    this.getAll();
  
  }
  
  
    async getAll() {
    
      const observable = await this.carsService.getAllcars();
      observable.subscribe(
        data => {
        
          this.cars = data.data;
          console.log("cars:")
          console.log(data.data);
          if(this.cars.length%3==0){
          this.noofcarsrows=this.cars.length/3}
        },
        err => {
          console.log('err', err);
        }
      );
    }


}
