import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HayvanaraPage } from './hayvanara.page';

describe('HayvanaraPage', () => {
  let component: HayvanaraPage;
  let fixture: ComponentFixture<HayvanaraPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HayvanaraPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HayvanaraPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
