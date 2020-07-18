import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NewsignupPage } from './newsignup.page';

describe('NewsignupPage', () => {
  let component: NewsignupPage;
  let fixture: ComponentFixture<NewsignupPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsignupPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NewsignupPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
