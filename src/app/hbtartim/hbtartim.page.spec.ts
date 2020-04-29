import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HbtartimPage } from './hbtartim.page';

describe('HbtartimPage', () => {
  let component: HbtartimPage;
  let fixture: ComponentFixture<HbtartimPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HbtartimPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HbtartimPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
