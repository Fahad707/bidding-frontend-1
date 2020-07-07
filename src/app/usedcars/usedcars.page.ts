import { Component, OnInit } from '@angular/core';
import { CarsService } from '../sdk/custom/cars.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usedcars',
  templateUrl: './usedcars.page.html',
  styleUrls: ['./usedcars.page.scss'],
})
export class UsedcarsPage implements OnInit {

 
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
    
      const observable = await this.carsService.getAllusedcars();
      observable.subscribe(
        data => {
        
          this.cars = data.data;
          console.log("cars:")
          console.log(data.data);
          console.log(this.cars.length);
          
        },
        err => {
          console.log('err', err);
        }
      );
    }

}
