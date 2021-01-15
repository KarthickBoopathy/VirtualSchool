import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingcontentComponent } from './landingcontent.component';

describe('LandingcontentComponent', () => {
  let component: LandingcontentComponent;
  let fixture: ComponentFixture<LandingcontentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandingcontentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingcontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
