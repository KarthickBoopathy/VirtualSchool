import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentScheduledMeetingsComponent } from './student-scheduled-meetings.component';

describe('StudentScheduledMeetingsComponent', () => {
  let component: StudentScheduledMeetingsComponent;
  let fixture: ComponentFixture<StudentScheduledMeetingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentScheduledMeetingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentScheduledMeetingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
