import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherConductOnlineQuizComponent } from './teacher-conduct-online-quiz.component';

describe('TeacherConductOnlineQuizComponent', () => {
  let component: TeacherConductOnlineQuizComponent;
  let fixture: ComponentFixture<TeacherConductOnlineQuizComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeacherConductOnlineQuizComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherConductOnlineQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
