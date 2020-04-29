import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BilgiduzenlePage } from './bilgiduzenle.page';

describe('BilgiduzenlePage', () => {
  let component: BilgiduzenlePage;
  let fixture: ComponentFixture<BilgiduzenlePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BilgiduzenlePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BilgiduzenlePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
