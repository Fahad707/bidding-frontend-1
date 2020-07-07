import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.page.html',
  styleUrls: ['./invoice.page.scss'],
})
export class InvoicePage implements OnInit {
  am: any;
  d: any;
  c: any;
  dt: any;
  make: any;
  model: any;
  Trim_name: any;
  P: any;
  inct: any;
  time: any;

  constructor(private storage:Storage) { }

  ngOnInit() {
    this.init()
  }

  async init(){
   this.am = await this.storage.get("abidding")
   this.make=this.am.targetCar.Make
   this.model=this.am.targetCar.Model
   this.Trim_name=this.am.targetCar.Trim_name
   this.c=this.am.cust;
   this.dt=this.am.date;
   this.P = this.am.offerdt.Price
   this.inct=this.am.offerdt.incentive
   this.time=this.am.time
    console.log(this.am.cust +" "+this.am.date);
    console.log("~`~`~`~``~`~`~`~`~`~`~`~`~`~`~`~`~`~`~`~``~`~");
    this.d = this.am.offerdt.delivery
  }

}
