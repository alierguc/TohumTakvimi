import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TohumlamamodalPage } from './tohumlamamodal.page';

describe('TohumlamamodalPage', () => {
  let component: TohumlamamodalPage;
  let fixture: ComponentFixture<TohumlamamodalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TohumlamamodalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TohumlamamodalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
