import { Component, OnInit, Injectable } from '@angular/core';
import {MatRippleModule} from '@angular/material/core';
import { Router } from '@angular/router';

export interface StudentSubjectList {
subject : string;
}

@Component({
  selector: 'app-student-subjects',
  templateUrl: './student-subjects.component.html',
  styleUrls: ['./student-subjects.component.css']
})



export class StudentSubjectsComponent implements OnInit {
  timelineValue : string = "English";
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
  {subject : 'Zoology'},
  {subject : 'Computer'}
];

GoToSubjectContent(subj : string){
  console.log(subj);
  this.router.navigateByUrl('studentSubjectContent'); 
}


}
