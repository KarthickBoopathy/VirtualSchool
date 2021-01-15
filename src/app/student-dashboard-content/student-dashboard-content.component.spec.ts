import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentDashboardContentComponent } from './student-dashboard-content.component';

describe('StudentDashboardContentComponent', () => {
  let component: StudentDashboardContentComponent;
  let fixture: ComponentFixture<StudentDashboardContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentDashboardContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentDashboardContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
