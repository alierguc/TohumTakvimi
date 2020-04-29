import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HbkizginlikPage } from './hbkizginlik.page';

describe('HbkizginlikPage', () => {
  let component: HbkizginlikPage;
  let fixture: ComponentFixture<HbkizginlikPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HbkizginlikPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HbkizginlikPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
