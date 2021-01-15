import { Component, OnInit } from '@angular/core';


export interface ViewQuestions {
  Class: string;
  Subject: string;
  examQuestions: AllQuizQuestions[];
}
export interface AllQuizQuestions {
  Items: Boolean;
  Exam: string;
  QuestionID: string;
  Question: string;
  OptionA: string;
  OptionB: string;
  OptionC: string;
  OptionD: string;
  Answer: string;
}

export interface DigitalExamName {
  ExamName: string;
}


@Component({
  selector: 'app-teacher-quiz-library',
  templateUrl: './teacher-quiz-library.component.html',
  styleUrls: ['./teacher-quiz-library.component.css']
})
export class TeacherQuizLibraryComponent implements OnInit {
  selectedFilter: string;
  constructor() { }

  ngOnInit(): void {
  }

  examName: DigitalExamName[] = [
    { ExamName: "All" },
    { ExamName: "Mock Test 1" },
    { ExamName: "Mock Test 2" },
    { ExamName: "Mock Test 3" }
  ];


  allQuestions: ViewQuestions[] = [
    {
      Class: "11",
      Subject: "English",
      examQuestions: [
        {
          Items: false,
          Exam: "Mock Test 1",
          QuestionID: "M111",
          Question: "What is ATM ?",
          OptionA: "Cash",
          OptionB: "Check",
          OptionC: "Money",
          OptionD: "Amount",
          Answer: "Cash"

        },
        {
          Items: false,
          Exam: "Mock Test 1",
          QuestionID: "M112",
          Question: "What is Money ?",
          OptionA: "Cash",
          OptionB: "Check",
          OptionC: "Money",
          OptionD: "Amount",
          Answer: "Cash"
        },
        {
          Items: false,
          Exam: "Mock Test 2",
          QuestionID: "M113",
          Question: "What is Money ?",
          OptionA: "Cash",
          OptionB: "Check",
          OptionC: "Money",
          OptionD: "Amount",
          Answer: "Cash"
        },
      ]
    },
    {
      Class: "12",
      Subject: "English",
      examQuestions: [
        {
          Items: false,
          Exam: "Mock Test 1",
          QuestionID: "M111",
          Question: "What is ATM ?",
          OptionA: "Cash",
          OptionB: "Check",
          OptionC: "Money",
          OptionD: "Amount",
          Answer: "Cash"

        },
        {
          Items: false,
          Exam: "Mock Test 1",
          QuestionID: "M112",
          Question: "What is Money ?",
          OptionA: "Cash",
          OptionB: "Check",
          OptionC: "Money",
          OptionD: "Amount",
          Answer: "Cash"
        },
        {
          Items: false,
          Exam: "Mock Test 2",
          QuestionID: "M113",
          Question: "What is Money ?",
          OptionA: "Cash",
          OptionB: "Check",
          OptionC: "Money",
          OptionD: "Amount",
          Answer: "Cash"
        },
      ]
    }
  ];



  selectedQuestions: AllQuizQuestions[] = [];



  checkValue(selectedQui: AllQuizQuestions) {
    var element = <HTMLInputElement>document.getElementById(selectedQui.QuestionID);
    var isChecked = element.checked;

    if (isChecked) {
      this.selectedQuestions.push({
        Items: isChecked,
        Exam: selectedQui.Exam,
        QuestionID: selectedQui.QuestionID,
        Question: selectedQui.Question,
        OptionA: selectedQui.OptionA,
        OptionB: selectedQui.OptionB,
        OptionC: selectedQui.OptionC,
        OptionD: selectedQui.OptionD,
        Answer: selectedQui.Answer
      });
    }

    if (!isChecked) {
      for (var i = 0, len = this.selectedQuestions.length; i < len; i++) {
        if ((this.selectedQuestions[i].QuestionID == selectedQui.QuestionID)) {
          this.selectedQuestions.splice(i, 1);
          break;
        }
      }
    }

  }


  conductQuiz() {
    console.log("Final " + JSON.stringify(this.selectedQuestions));
  }


  searchFilteredList: AllQuizQuestions[] = [];



}

