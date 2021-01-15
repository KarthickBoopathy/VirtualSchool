import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';
import {MatChipsModule} from '@angular/material/chips';
import {MatChipInputEvent} from '@angular/material/chips';

export interface Classes {
  classValue: string;
  className: string;
}
export interface Subjects {
  subjectValue: string;
  subjectName: string;
}

export interface Allquestions{
  showselectedClass : string;
  showSelectedSubject : string;
  showCreatedQuestion : string;
  showEnteredOptionA : string;
  showEnteredOptionB : string;
  showEnteredOptionC : string;
  showEnteredOptionD : string;
  showEnteredAnswer : string;

  
}

@Component({
  selector: 'app-teacher-conduct-online-quiz',
  templateUrl: './teacher-conduct-online-quiz.component.html',
  styleUrls: ['./teacher-conduct-online-quiz.component.css']
})
export class TeacherConductOnlineQuizComponent implements OnInit {

  selectedData : FormGroup;
  selectedBasicData : FormGroup;
  showQuestionTable : Boolean = false;
  showSetQuestion : Boolean = false;
  showSubmitButton : Boolean = false;


  constructor() { }

  ngOnInit(): void {

    this.selectedData = new FormGroup({
      
      enteredQuestion : new FormControl(),
      enteredOptionA : new FormControl(),
      enteredOptionB : new FormControl(),
      enteredOptionC : new FormControl(),
      enteredOptionD : new FormControl(),
      enteredAnswer : new FormControl()
      
    });

    this.selectedBasicData = new FormGroup({
      
      selectedClass : new FormControl(),
      selectedSubject : new FormControl()
      
    });

  }

  class: Classes[] = [
    {classValue: '12-A', className: '12-A'},
    {classValue: '11-B', className: '11-B'},
    {classValue: '10-C', className: '10-c'}
  
  ];

  subject: Subjects[] = [
    {subjectValue: 'english', subjectName: 'English'},
    {subjectValue: 'mathametics', subjectName: 'Mathametics'},
    {subjectValue: 'physics', subjectName: 'Physics'}
  ];

  showConductedQuesData : Allquestions[] = [];

  
  onSubmit() :void {

  }
  onSubmitBasicData():void {

  }

  showAddQuestionComponents() : void {
    this.showSetQuestion = true;
  }


 
 
  setQuestionForTest(){
    

    this.showQuestionTable = true;

            this.showConductedQuesData.push({
              showselectedClass : this.selectedBasicData.get('selectedClass').value,
              showSelectedSubject : this.selectedBasicData.get('selectedSubject').value,
              showCreatedQuestion : this.selectedData.get('enteredQuestion').value,
              showEnteredOptionA : this.selectedData.get('enteredOptionA').value,
              showEnteredOptionB : this.selectedData.get('enteredOptionB').value,
              showEnteredOptionC : this.selectedData.get('enteredOptionC').value,
              showEnteredOptionD : this.selectedData.get('enteredOptionD').value,
              showEnteredAnswer : this.selectedData.get('enteredAnswer').value,
              
            });

            this.showSubmitButton = true;

            var resetForm = <HTMLFormElement>document.getElementById('Set-Question-Form');
            resetForm.reset(); 
            
          

  
  }

  remove(showConductedQuesData: Allquestions): void {

    const index = this.showConductedQuesData.indexOf(showConductedQuesData);

    if (index >= 0) {
      this.showConductedQuesData.splice(index, 1);
    }

    if(index < 1){
      this.showSubmitButton = false;
    }

  }


  conductExam() {
    console.log(this.showConductedQuesData);

    console.log(JSON.stringify(this.showConductedQuesData));
  }

}
