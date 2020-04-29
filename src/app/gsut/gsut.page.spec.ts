import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GsutPage } from './gsut.page';

describe('GsutPage', () => {
  let component: GsutPage;
  let fixture: ComponentFixture<GsutPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GsutPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GsutPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
