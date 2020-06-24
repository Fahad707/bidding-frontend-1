import { Component, OnInit } from '@angular/core';
import { CarsService  } from '../sdk/custom/cars.service' 
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-display-cars',
  templateUrl: './display-cars.page.html',
  styleUrls: ['./display-cars.page.scss'],
})
export class DisplayCarsPage implements OnInit {
  cars: [];
  carid;
  sub;
  noofcarsrows;
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
