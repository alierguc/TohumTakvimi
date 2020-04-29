import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TohumguncellePage } from './tohumguncelle.page';

describe('TohumguncellePage', () => {
  let component: TohumguncellePage;
  let fixture: ComponentFixture<TohumguncellePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TohumguncellePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TohumguncellePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
