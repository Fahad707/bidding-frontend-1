import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AcceptlistPage } from './acceptlist.page';

describe('AcceptlistPage', () => {
  let component: AcceptlistPage;
  let fixture: ComponentFixture<AcceptlistPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcceptlistPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AcceptlistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
