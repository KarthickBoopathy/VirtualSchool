import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherManageMaterialComponent } from './teacher-manage-material.component';

describe('TeacherManageMaterialComponent', () => {
  let component: TeacherManageMaterialComponent;
  let fixture: ComponentFixture<TeacherManageMaterialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeacherManageMaterialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherManageMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
