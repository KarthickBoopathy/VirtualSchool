import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
export interface StudentSubjectList {
  subject : string;
  }

 
@Component({
  selector: 'app-student-online-quiz',
  templateUrl: './student-online-quiz.component.html',
  styleUrls: ['./student-online-quiz.component.css']
})
export class StudentOnlineQuizComponent implements OnInit {
  timelineValue : string = "Online Quiz";
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

  GoToHome(){
    this.router.navigateByUrl('studentHome'); 
  }

}
