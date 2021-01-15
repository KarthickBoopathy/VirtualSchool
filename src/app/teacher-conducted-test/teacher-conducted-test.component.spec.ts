import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherConductedTestComponent } from './teacher-conducted-test.component';

describe('TeacherConductedTestComponent', () => {
  let component: TeacherConductedTestComponent;
  let fixture: ComponentFixture<TeacherConductedTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeacherConductedTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherConductedTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
