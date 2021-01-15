import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentOnlineQuizDescriptionComponent } from './student-online-quiz-description.component';

describe('StudentOnlineQuizDescriptionComponent', () => {
  let component: StudentOnlineQuizDescriptionComponent;
  let fixture: ComponentFixture<StudentOnlineQuizDescriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentOnlineQuizDescriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentOnlineQuizDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
