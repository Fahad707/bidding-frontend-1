import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CustomerBiddingPage } from './customer-bidding.page';

describe('CustomerBiddingPage', () => {
  let component: CustomerBiddingPage;
  let fixture: ComponentFixture<CustomerBiddingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerBiddingPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CustomerBiddingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
