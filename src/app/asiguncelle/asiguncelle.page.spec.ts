import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AsiguncellePage } from './asiguncelle.page';

describe('AsiguncellePage', () => {
  let component: AsiguncellePage;
  let fixture: ComponentFixture<AsiguncellePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsiguncellePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AsiguncellePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
