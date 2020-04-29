import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AndroidPage } from './android.page';

describe('AndroidPage', () => {
  let component: AndroidPage;
  let fixture: ComponentFixture<AndroidPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AndroidPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AndroidPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
