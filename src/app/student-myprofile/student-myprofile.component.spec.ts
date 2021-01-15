import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentMyprofileComponent } from './student-myprofile.component';

describe('StudentMyprofileComponent', () => {
  let component: StudentMyprofileComponent;
  let fixture: ComponentFixture<StudentMyprofileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentMyprofileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentMyprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
