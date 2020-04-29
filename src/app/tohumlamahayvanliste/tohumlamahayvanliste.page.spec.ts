import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TohumlamahayvanlistePage } from './tohumlamahayvanliste.page';

describe('TohumlamahayvanlistePage', () => {
  let component: TohumlamahayvanlistePage;
  let fixture: ComponentFixture<TohumlamahayvanlistePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TohumlamahayvanlistePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TohumlamahayvanlistePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
