import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';
import {MatChipsModule} from '@angular/material/chips';
import {MatChipInputEvent} from '@angular/material/chips';
import {COMMA, ENTER} from '@angular/cdk/keycodes';

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
  showEnteredKeyWords : string;
  showQuestionScore : string;
  
}


@Component({
  selector: 'app-teacher-conduct-handwritten-test',
  templateUrl: './teacher-conduct-handwritten-test.component.html',
  styleUrls: ['./teacher-conduct-handwritten-test.component.css']
})
export class TeacherConductHandwrittenTestComponent implements OnInit {

  selectedData : FormGroup;
  selectedBasicData : FormGroup;
  showQuestionTable : Boolean = false;
  showSetQuestion : Boolean = false;
  showSubmitButton : Boolean = false;






  constructor() { }

  ngOnInit(): void {

    this.selectedData = new FormGroup({
      
      enteredQuestion : new FormControl(),
      enteredKeyWords : new FormControl(),
      allocatedScore : new FormControl()
      
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
              showEnteredKeyWords : this.selectedData.get('enteredKeyWords').value,
              showQuestionScore : this.selectedData.get('allocatedScore').value
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


