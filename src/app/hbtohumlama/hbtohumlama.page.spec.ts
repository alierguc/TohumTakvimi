import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HbtohumlamaPage } from './hbtohumlama.page';

describe('HbtohumlamaPage', () => {
  let component: HbtohumlamaPage;
  let fixture: ComponentFixture<HbtohumlamaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HbtohumlamaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HbtohumlamaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
