import { Component, OnInit, OnDestroy, OnChanges } from '@angular/core';
import { Router } from '@angular/router';

export interface QuizChapters {
  quizID: string;
  quizChapterName: string;
} 

@Component({
  selector: 'app-student-online-quiz-description',
  templateUrl: './student-online-quiz-description.component.html',
  styleUrls: ['./student-online-quiz-description.component.css']
})
export class StudentOnlineQuizDescriptionComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  quizchapter: QuizChapters[] = [
 
    { quizID: 'JavaScript', quizChapterName: 'JavaScript' },
    { quizID: 'Asp.Net', quizChapterName: 'Asp.Net' },
    { quizID: 'C Sharp', quizChapterName: 'C Sharp' },
    { quizID: 'Design Patterns', quizChapterName: 'Design Patterns' }
  
  ];

  startQuiz():void{

    this.router.navigateByUrl('studentOnlineQuizQuestion');
  }

}
