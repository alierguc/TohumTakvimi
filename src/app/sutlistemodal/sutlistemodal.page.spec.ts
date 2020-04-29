import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SutlistemodalPage } from './sutlistemodal.page';

describe('SutlistemodalPage', () => {
  let component: SutlistemodalPage;
  let fixture: ComponentFixture<SutlistemodalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SutlistemodalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SutlistemodalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
