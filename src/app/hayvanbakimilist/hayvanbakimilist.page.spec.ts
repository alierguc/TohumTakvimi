import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HayvanbakimilistPage } from './hayvanbakimilist.page';

describe('HayvanbakimilistPage', () => {
  let component: HayvanbakimilistPage;
  let fixture: ComponentFixture<HayvanbakimilistPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HayvanbakimilistPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HayvanbakimilistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
