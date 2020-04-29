import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HastalikmodalPage } from './hastalikmodal.page';

describe('HastalikmodalPage', () => {
  let component: HastalikmodalPage;
  let fixture: ComponentFixture<HastalikmodalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HastalikmodalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HastalikmodalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
