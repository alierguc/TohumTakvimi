import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SutmodalPage } from './sutmodal.page';

describe('SutmodalPage', () => {
  let component: SutmodalPage;
  let fixture: ComponentFixture<SutmodalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SutmodalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SutmodalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
