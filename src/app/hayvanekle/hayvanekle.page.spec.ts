import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HayvaneklePage } from './hayvanekle.page';

describe('HayvaneklePage', () => {
  let component: HayvaneklePage;
  let fixture: ComponentFixture<HayvaneklePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HayvaneklePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HayvaneklePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
