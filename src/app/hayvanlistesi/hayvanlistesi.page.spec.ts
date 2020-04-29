import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HayvanlistesiPage } from './hayvanlistesi.page';

describe('HayvanlistesiPage', () => {
  let component: HayvanlistesiPage;
  let fixture: ComponentFixture<HayvanlistesiPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HayvanlistesiPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HayvanlistesiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
