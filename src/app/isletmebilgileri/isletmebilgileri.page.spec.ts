import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IsletmebilgileriPage } from './isletmebilgileri.page';

describe('IsletmebilgileriPage', () => {
  let component: IsletmebilgileriPage;
  let fixture: ComponentFixture<IsletmebilgileriPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IsletmebilgileriPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IsletmebilgileriPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
