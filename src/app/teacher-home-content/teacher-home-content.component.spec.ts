import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherHomeContentComponent } from './teacher-home-content.component';

describe('TeacherHomeContentComponent', () => {
  let component: TeacherHomeContentComponent;
  let fixture: ComponentFixture<TeacherHomeContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeacherHomeContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherHomeContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
