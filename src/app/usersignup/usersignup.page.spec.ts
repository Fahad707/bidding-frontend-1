import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UsersignupPage } from './usersignup.page';

describe('UsersignupPage', () => {
  let component: UsersignupPage;
  let fixture: ComponentFixture<UsersignupPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsersignupPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UsersignupPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
