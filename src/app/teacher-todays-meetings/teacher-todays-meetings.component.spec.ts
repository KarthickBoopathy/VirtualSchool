import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherTodaysMeetingsComponent } from './teacher-todays-meetings.component';

describe('TeacherTodaysMeetingsComponent', () => {
  let component: TeacherTodaysMeetingsComponent;
  let fixture: ComponentFixture<TeacherTodaysMeetingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeacherTodaysMeetingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherTodaysMeetingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
