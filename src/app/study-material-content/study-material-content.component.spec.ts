import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudyMaterialContentComponent } from './study-material-content.component';

describe('StudyMaterialContentComponent', () => {
  let component: StudyMaterialContentComponent;
  let fixture: ComponentFixture<StudyMaterialContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudyMaterialContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudyMaterialContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
