import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DealerloginPage } from './dealerlogin.page';

describe('DealerloginPage', () => {
  let component: DealerloginPage;
  let fixture: ComponentFixture<DealerloginPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DealerloginPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DealerloginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
