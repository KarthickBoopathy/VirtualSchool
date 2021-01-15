import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherExamLibraryComponent } from './teacher-exam-library.component';

describe('TeacherExamLibraryComponent', () => {
  let component: TeacherExamLibraryComponent;
  let fixture: ComponentFixture<TeacherExamLibraryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeacherExamLibraryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherExamLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
