import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { KizginlikmodalPage } from './kizginlikmodal.page';

describe('KizginlikmodalPage', () => {
  let component: KizginlikmodalPage;
  let fixture: ComponentFixture<KizginlikmodalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KizginlikmodalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(KizginlikmodalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
