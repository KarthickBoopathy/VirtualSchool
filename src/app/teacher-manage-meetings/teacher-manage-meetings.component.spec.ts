import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherManageMeetingsComponent } from './teacher-manage-meetings.component';

describe('TeacherManageMeetingsComponent', () => {
  let component: TeacherManageMeetingsComponent;
  let fixture: ComponentFixture<TeacherManageMeetingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeacherManageMeetingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherManageMeetingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
