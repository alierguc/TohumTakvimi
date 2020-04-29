import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IsletmedencikarmodalPage } from './isletmedencikarmodal.page';

describe('IsletmedencikarmodalPage', () => {
  let component: IsletmedencikarmodalPage;
  let fixture: ComponentFixture<IsletmedencikarmodalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IsletmedencikarmodalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IsletmedencikarmodalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
