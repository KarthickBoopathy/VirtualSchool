import { Component, OnInit } from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';
import { Router } from '@angular/router';

export interface StudentSubjectList {
  subject : string;
  }

@Component({
  selector: 'app-teacher-conduct-test',
  templateUrl: './teacher-conduct-test.component.html',
  styleUrls: ['./teacher-conduct-test.component.css']
})
export class TeacherConductTestComponent implements OnInit {
  timelineValue : string = "Conduct Test";
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  
  subjectList : StudentSubjectList[] = [

    {subject : 'English'},
    {subject : 'Tamil'},
    {subject : 'Mathematics'},
    {subject : 'Physics'},
    {subject : 'Chemistry'},
    {subject : 'Botany'},
    {subject : 'Zoology'}
  ];

  GoToTeacherHome(){
    this.router.navigateByUrl('teacherHome'); 
  }
  
}
