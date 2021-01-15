import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentOnlineQuizComponent } from './student-online-quiz.component';

describe('StudentOnlineQuizComponent', () => {
  let component: StudentOnlineQuizComponent;
  let fixture: ComponentFixture<StudentOnlineQuizComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentOnlineQuizComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentOnlineQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
