import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HekimmodalPage } from './hekimmodal.page';

describe('HekimmodalPage', () => {
  let component: HekimmodalPage;
  let fixture: ComponentFixture<HekimmodalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HekimmodalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HekimmodalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
