import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HbasilamaPage } from './hbasilama.page';

describe('HbasilamaPage', () => {
  let component: HbasilamaPage;
  let fixture: ComponentFixture<HbasilamaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HbasilamaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HbasilamaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
