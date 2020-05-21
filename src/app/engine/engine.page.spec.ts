import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EnginePage } from './engine.page';

describe('EnginePage', () => {
  let component: EnginePage;
  let fixture: ComponentFixture<EnginePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnginePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EnginePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
