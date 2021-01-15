import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentBarchartSubjectmarksComponent } from './student-barchart-subjectmarks.component';

describe('StudentBarchartSubjectmarksComponent', () => {
  let component: StudentBarchartSubjectmarksComponent;
  let fixture: ComponentFixture<StudentBarchartSubjectmarksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentBarchartSubjectmarksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentBarchartSubjectmarksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
