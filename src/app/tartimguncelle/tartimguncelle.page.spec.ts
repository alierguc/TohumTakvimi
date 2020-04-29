import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TartimguncellePage } from './tartimguncelle.page';

describe('TartimguncellePage', () => {
  let component: TartimguncellePage;
  let fixture: ComponentFixture<TartimguncellePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TartimguncellePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TartimguncellePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
