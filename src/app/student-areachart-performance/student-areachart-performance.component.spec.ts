import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentAreachartPerformanceComponent } from './student-areachart-performance.component';

describe('StudentAreachartPerformanceComponent', () => {
  let component: StudentAreachartPerformanceComponent;
  let fixture: ComponentFixture<StudentAreachartPerformanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentAreachartPerformanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentAreachartPerformanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
