import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AsilamamodalPage } from './asilamamodal.page';

describe('AsilamamodalPage', () => {
  let component: AsilamamodalPage;
  let fixture: ComponentFixture<AsilamamodalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsilamamodalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AsilamamodalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
