import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HastalikguncellePage } from './hastalikguncelle.page';

describe('HastalikguncellePage', () => {
  let component: HastalikguncellePage;
  let fixture: ComponentFixture<HastalikguncellePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HastalikguncellePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HastalikguncellePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
