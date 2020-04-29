import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TartimmodalPage } from './tartimmodal.page';

describe('TartimmodalPage', () => {
  let component: TartimmodalPage;
  let fixture: ComponentFixture<TartimmodalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TartimmodalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TartimmodalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
