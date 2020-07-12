import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CarDealsPage } from './car-deals.page';

describe('CarDealsPage', () => {
  let component: CarDealsPage;
  let fixture: ComponentFixture<CarDealsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarDealsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CarDealsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
