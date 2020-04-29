import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { KullanimkPage } from './kullanimk.page';

describe('KullanimkPage', () => {
  let component: KullanimkPage;
  let fixture: ComponentFixture<KullanimkPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KullanimkPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(KullanimkPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
