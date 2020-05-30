import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ChooseCartypePage } from './choose-cartype.page';

describe('ChooseCartypePage', () => {
  let component: ChooseCartypePage;
  let fixture: ComponentFixture<ChooseCartypePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChooseCartypePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ChooseCartypePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
