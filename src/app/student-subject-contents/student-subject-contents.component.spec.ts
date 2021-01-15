import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentSubjectContentsComponent } from './student-subject-contents.component';

describe('StudentSubjectContentsComponent', () => {
  let component: StudentSubjectContentsComponent;
  let fixture: ComponentFixture<StudentSubjectContentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentSubjectContentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentSubjectContentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
