import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BiddingSessionPage } from './bidding-session.page';

describe('BiddingSessionPage', () => {
  let component: BiddingSessionPage;
  let fixture: ComponentFixture<BiddingSessionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BiddingSessionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BiddingSessionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
