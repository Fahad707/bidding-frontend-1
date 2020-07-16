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
  price: any;
  md: any;
  cl: any;
  ip: any;
  maxmpy: any;
  con: any;
  dn: any;
  ph: any;
  em: any;
  role: any;

  constructor(private storage:Storage) { }

  ngOnInit() {
    this.init()
  }

  async init(){
    this.role = await this.storage.get('role');
    if(this.role==0){
    this.am = await this.storage.get("abidding")
    }
    else{
    this.am = await this.storage.get("acustomerbidding")
    }

   this.make=this.am.targetCar.Make
   this.con=this.am.targetCar.Condition
   this.model=this.am.targetCar.Model
   this.Trim_name=this.am.targetCar.Trim_name
   this.c=this.am.cust;
   this.dt=this.am.date;
   this.P = this.am.offerdt.Price
   this.dn = this.am.offerdt.dealershipName
   this.ph = this.am.offerdt.phone
   this.em = this.am.offerdt.email
   this.inct=this.am.offerdt.incentive
   this.md = this.am.offerdt.lease_info.monthly_due
   this.cl = this.am.offerdt.lease_info.Contract_length
   this.ip = this.am.offerdt.lease_info.Initial_Payment
   this. maxmpy = this.am.offerdt.lease_info.Max_miles_year
   this.time=this.am.time
    console.log(this.am.BidOffersType +"  Price: "+this.am.offerdt.Price);
    console.log("~`~`~`~``~`~`~`~`~`~`~`~`~`~`~`~`~`~`~`~``~`~");
    this.d = this.am.offerdt.delivery
    
  }

}
