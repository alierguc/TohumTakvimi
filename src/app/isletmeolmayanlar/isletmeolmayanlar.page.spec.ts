import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IsletmeolmayanlarPage } from './isletmeolmayanlar.page';

describe('IsletmeolmayanlarPage', () => {
  let component: IsletmeolmayanlarPage;
  let fixture: ComponentFixture<IsletmeolmayanlarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IsletmeolmayanlarPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IsletmeolmayanlarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
