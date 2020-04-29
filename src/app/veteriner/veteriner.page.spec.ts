import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VeterinerPage } from './veteriner.page';

describe('VeterinerPage', () => {
  let component: VeterinerPage;
  let fixture: ComponentFixture<VeterinerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VeterinerPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VeterinerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
