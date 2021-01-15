import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentQuizQuestionsComponent } from './student-quiz-questions.component';

describe('StudentQuizQuestionsComponent', () => {
  let component: StudentQuizQuestionsComponent;
  let fixture: ComponentFixture<StudentQuizQuestionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentQuizQuestionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentQuizQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
