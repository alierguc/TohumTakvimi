import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HayvandurumPage } from './hayvandurum.page';

describe('HayvandurumPage', () => {
  let component: HayvandurumPage;
  let fixture: ComponentFixture<HayvandurumPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HayvandurumPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HayvandurumPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
