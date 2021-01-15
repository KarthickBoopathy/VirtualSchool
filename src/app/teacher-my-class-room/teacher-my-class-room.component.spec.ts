import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherMyClassRoomComponent } from './teacher-my-class-room.component';

describe('TeacherMyClassRoomComponent', () => {
  let component: TeacherMyClassRoomComponent;
  let fixture: ComponentFixture<TeacherMyClassRoomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TeacherMyClassRoomComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherMyClassRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
