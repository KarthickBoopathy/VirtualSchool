import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherQuizLibraryComponent } from './teacher-quiz-library.component';

describe('TeacherQuizLibraryComponent', () => {
  let component: TeacherQuizLibraryComponent;
  let fixture: ComponentFixture<TeacherQuizLibraryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeacherQuizLibraryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherQuizLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
