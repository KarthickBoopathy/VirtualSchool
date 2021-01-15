import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherConductHandwrittenTestComponent } from './teacher-conduct-handwritten-test.component';

describe('TeacherConductHandwrittenTestComponent', () => {
  let component: TeacherConductHandwrittenTestComponent;
  let fixture: ComponentFixture<TeacherConductHandwrittenTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeacherConductHandwrittenTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherConductHandwrittenTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
