import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HbhastalikPage } from './hbhastalik.page';

describe('HbhastalikPage', () => {
  let component: HbhastalikPage;
  let fixture: ComponentFixture<HbhastalikPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HbhastalikPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HbhastalikPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
