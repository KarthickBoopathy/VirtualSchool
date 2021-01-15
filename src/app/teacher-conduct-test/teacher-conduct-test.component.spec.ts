import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherConductTestComponent } from './teacher-conduct-test.component';

describe('TeacherConductTestComponent', () => {
  let component: TeacherConductTestComponent;
  let fixture: ComponentFixture<TeacherConductTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeacherConductTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherConductTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
