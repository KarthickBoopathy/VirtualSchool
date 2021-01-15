import { Component, OnInit } from '@angular/core';

export interface ConductedExam {
  Class: string;
  Subject: string;
  Time : string;
  StartDate : string;
  EndDate : string;
  ExamQuestions: AllConductedQuestions[];
}

export interface AllConductedQuestions {
  Question: string;
  Score: number;
}

@Component({
  selector: 'app-teacher-conducted-test',
  templateUrl: './teacher-conducted-test.component.html',
  styleUrls: ['./teacher-conducted-test.component.css']
})
export class TeacherConductedTestComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  conductedExam: ConductedExam[] = [
    {
      Class: "11",
      Subject: "English",
      Time : "2.30",
      StartDate : "Sep 20",
      EndDate : "Sep 21",
      ExamQuestions: [
        {
          Question: "What is ATM,What is ATM,What is ATM,What is ATM,What is ATM,What is ATM ?",
          Score: 2
        },
        {
          Question: "What is Check Deposit ?",
          Score: 5
        },
        {
          Question: "What is Cash Dispenser ?",
          Score: 10
        }
      ],
    },
    {
      Class: "12",
      Subject: "Maths",
      Time : "2.30",
      StartDate : "Sep 20",
      EndDate : "Sep 21",
      ExamQuestions: [
        {
          Question: "What is Algebra ?",
          Score: 2
        },
        {
          Question: "What is Trignometry ?",
          Score: 5
        },
        {
          Question: "What is Permutation ?",
          Score: 10
        }
      ],
    }

  ];


}
