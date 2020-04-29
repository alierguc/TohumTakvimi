import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BuzagimodalPage } from './buzagimodal.page';

describe('BuzagimodalPage', () => {
  let component: BuzagimodalPage;
  let fixture: ComponentFixture<BuzagimodalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuzagimodalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BuzagimodalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
