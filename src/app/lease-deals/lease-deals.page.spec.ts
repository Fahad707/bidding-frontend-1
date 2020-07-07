import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LeaseDealsPage } from './lease-deals.page';

describe('LeaseDealsPage', () => {
  let component: LeaseDealsPage;
  let fixture: ComponentFixture<LeaseDealsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeaseDealsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LeaseDealsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
