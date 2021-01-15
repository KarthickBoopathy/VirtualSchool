import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentTableExammarksDashboardComponent } from './student-table-exammarks-dashboard.component';

describe('StudentTableExammarksDashboardComponent', () => {
  let component: StudentTableExammarksDashboardComponent;
  let fixture: ComponentFixture<StudentTableExammarksDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentTableExammarksDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentTableExammarksDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
