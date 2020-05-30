import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CustomerBiddingSessionPage } from './customer-bidding-session.page';

describe('CustomerBiddingSessionPage', () => {
  let component: CustomerBiddingSessionPage;
  let fixture: ComponentFixture<CustomerBiddingSessionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerBiddingSessionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CustomerBiddingSessionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
