import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HayvanlarPage } from './hayvanlar.page';

describe('HayvanlarPage', () => {
  let component: HayvanlarPage;
  let fixture: ComponentFixture<HayvanlarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HayvanlarPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HayvanlarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
