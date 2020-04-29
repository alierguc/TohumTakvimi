import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { KizginlikguncellePage } from './kizginlikguncelle.page';

describe('KizginlikguncellePage', () => {
  let component: KizginlikguncellePage;
  let fixture: ComponentFixture<KizginlikguncellePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KizginlikguncellePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(KizginlikguncellePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
