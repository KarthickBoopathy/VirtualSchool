import { Component, OnInit } from '@angular/core';


export interface ViewQuestions {
  Class: string;
  Subject: string;
  examQuestions: AllExamQuestions[];
}
export interface AllExamQuestions {
  Items: Boolean;
  Exam: string;
  QuestionID: string;
  Question: string;
  KeyWords: string;
  Score: number;
}
 
/*
export interface AllExamQuestions {
  Items: Boolean;
  Exam: string;
  Class: string;
  Subject: string;

  QuestionID: string;
  Question: string;
  KeyWords: string;
  Score: number;
}
*/


@Component({
  selector: 'app-teacher-exam-library',
  templateUrl: './teacher-exam-library.component.html',
  styleUrls: ['./teacher-exam-library.component.css']
})
export class TeacherExamLibraryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  allQuestions: ViewQuestions[] = [

    {
      Class: "11",
      Subject: "English",
      examQuestions : [
        {
          Items: false,
          Exam: "Mock Test 1",
          QuestionID: "M111",
          Question: "What is ATM ?",
          KeyWords: "Cash,Check,Money,Amount,Balance",
          Score: 2
        },
        {
          Items: false,
          Exam: "Mock Test 2",
          QuestionID: "M112",
          Question: "What is Dispenser ?",
          KeyWords: "Cash,Check,Money,Amount,Balance",
          Score: 2
        }
      ]
  
    },
    
    {
      Class: "12",
      Subject: "English",
      examQuestions : [
        {
          Items: false,
          Exam: "Mock Test 1",
          QuestionID: "M111",
          Question: "What is ATM ?",
          KeyWords: "Cash,Check,Money,Amount,Balance",
          Score: 2
        },
        {
          Items: false,
          Exam: "Mock Test 1",
          QuestionID: "M114",
          Question: "What is ATM ?",
          KeyWords: "Cash,Check,Money,Amount,Balance",
          Score: 2
        },
        {
          Items: false,
          Exam: "Mock Test 1",
          QuestionID: "M115",
          Question: "What is ATM ?",
          KeyWords: "Cash,Check,Money,Amount,Balance",
          Score: 2
        }
      ]
  
    }
  ];


  selectedQuestions: AllExamQuestions[] = [];



  checkValue(selectedQue: AllExamQuestions) {
    var element = <HTMLInputElement>document.getElementById(selectedQue.QuestionID);
    var isChecked = element.checked;

    if (isChecked) {
      this.selectedQuestions.push({
        Items: isChecked,
        Exam: selectedQue.Exam,
        QuestionID: selectedQue.QuestionID,
        Question: selectedQue.Question,
        KeyWords: selectedQue.KeyWords,
        Score: selectedQue.Score
      });
    }

    if (!isChecked) {
      for (var i = 0, len = this.selectedQuestions.length; i < len; i++) {
        if ((this.selectedQuestions[i].QuestionID == selectedQue.QuestionID)) {
          this.selectedQuestions.splice(i, 1);
          break;
        }
      }
    }

  }

  

  conductExam() {
    console.log("Final " + JSON.stringify(this.selectedQuestions));
  }


  /*

  examQuestions: AllExamQuestions[] = [

    {
      Items: false,
      Exam: "Mock Test 1",
      Class: "11",
      Subject: "English",
      QuestionID: "M111",
      Question: "What is ATM ?",
      KeyWords: "Cash,Check,Money,Amount,Balance",
      Score: 2
    },
    {
      Items: false,
      Exam: "Mock Test 1",
      Class: "11",
      Subject: "English",
      QuestionID: "M112",
      Question: "What is Money ?",
      KeyWords: "Cash,Check,Money,Amount,Balance,Cash,Check,Money,Amount,Balance",
      Score: 2
    },
    {
      Items: false,
      Exam: "Mock Test 1",
      Class: "11",
      Subject: "English",
      QuestionID: "M113",
      Question: "What is Money ?",
      KeyWords: "M3",
      Score: 2
    },
    {
      Items: false,
      Exam: "Mock Test 1",
      Class: "11",
      Subject: "English",
      QuestionID: "M114",
      Question: "What is Money ?",
      KeyWords: "M4",
      Score: 2
    },
    {
      Items: false,
      Exam: "Mock Test 1",
      Class: "11",
      Subject: "English",
      QuestionID: "M115",
      Question: "What is Money ?",
      KeyWords: "M5",
      Score: 2
    }
  ];



  selectedQuestions: AllExamQuestions[] = [];



  checkValue(selectedQue: AllExamQuestions) {
    var element = <HTMLInputElement>document.getElementById(selectedQue.QuestionID);
    var isChecked = element.checked;

    if (isChecked) {
      this.selectedQuestions.push({
        Items: isChecked,
        Exam: selectedQue.Exam,
        Class: selectedQue.Class,
        Subject: selectedQue.Subject,
        QuestionID: selectedQue.QuestionID,
        Question: selectedQue.Question,
        KeyWords: selectedQue.KeyWords,
        Score: selectedQue.Score
      });
    }

    if (!isChecked) {
      for (var i = 0, len = this.selectedQuestions.length; i < len; i++) {
        if ((this.selectedQuestions[i].QuestionID == selectedQue.QuestionID)) {
          this.selectedQuestions.splice(i, 1);
          break;
        }
      }
    }

  }

  

  conductExam() {
    console.log("Final " + JSON.stringify(this.selectedQuestions));
  }
*/
}

