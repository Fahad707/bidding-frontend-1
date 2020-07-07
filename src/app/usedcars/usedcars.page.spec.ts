import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UsedcarsPage } from './usedcars.page';

describe('UsedcarsPage', () => {
  let component: UsedcarsPage;
  let fixture: ComponentFixture<UsedcarsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsedcarsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UsedcarsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
