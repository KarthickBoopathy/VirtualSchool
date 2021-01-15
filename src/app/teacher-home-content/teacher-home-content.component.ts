import { Component, OnInit } from '@angular/core';
import { MatRadioModule } from '@angular/material/radio';


export interface QuizQuestions {

  fullQuestion: string;
  optionA: string;
  optionB: string;
  optionC: string;
  optionD: string;
  answer: string;
}


@Component({
  selector: 'app-teacher-home-content',
  templateUrl: './teacher-home-content.component.html',
  styleUrls: ['./teacher-home-content.component.css']
})
export class TeacherHomeContentComponent implements OnInit {
  favoriteSeason: string;
  seasons: string[] = ['Winter', 'Spring', 'Summer', 'Autumn'];
  constructor() { }

  ngOnInit(): void {
  }



  quizquestion : QuizQuestions[] = [
    {fullQuestion : "What is ATM", optionA : "Money", optionB : "Cash", optionC : "Check", optionD : "Dispenser", answer: "Cash"},
    {fullQuestion : "What is Dispenser", optionA : "Nothing", optionB : "Cash", optionC : "Check", optionD : "Deposit", answer: "Check"},
    {fullQuestion : "What is Deposit", optionA : "Dispenser", optionB : "Cash", optionC : "Deposit", optionD : "Account", answer: "Account"}
  ];

  
}
