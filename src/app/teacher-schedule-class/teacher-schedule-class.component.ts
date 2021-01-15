import { Component, OnInit } from '@angular/core';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatAccordion} from '@angular/material/expansion';
import {MatSelectModule} from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';


export interface Subjects {
  subjectValue: string;
  subjectName: string;
}

export interface Classes {
  classValue: string;
  className: string;
}

export interface Section {
  sectionValue: string;
  sectionName: string;
}

export interface Times {
  timeValue: string;
  timeName: string;
}

export interface ShowMeetingData{
  showsSelectedSubject : string;
  showSelectedClass : string;
  showSelectedSection : string;
  showEnteredTopic : string;
  showSelectedDate : string;
  showSelectedTime : string;
  showEnteredMeetingLink : string;
  showSelectedStartDate : string;
  showSelectedEndDate : string;
 
  
}

@Component({
  selector: 'app-teacher-schedule-class',
  templateUrl: './teacher-schedule-class.component.html',
  styleUrls: ['./teacher-schedule-class.component.css']
})

export class TeacherScheduleClassComponent implements OnInit {

  scheduledData : FormGroup;
  addSingleclass : Boolean = false;
  addRecurrenceclass : Boolean = false;
  showSuccessMessage : Boolean = false;
  showMeetingTable : Boolean = false;
  showSubmitButton : Boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.scheduledData = new FormGroup({
      enteredTopic : new FormControl(),
      selectedSubject : new FormControl(),
      selectedClass :new FormControl(),
      selectedSection :new FormControl(),
      selectedDate : new FormControl(),
      selectedTime : new FormControl(),
      enteredMeetingLink : new FormControl(),
      selectedStartDate : new FormControl(),
      selectedEndDate : new FormControl()
});
  }

  addsingle() : void{
   
    this.addSingleclass = true;
    this.addRecurrenceclass = false;
    this.showSuccessMessage= false;
    
   // this.scheduledData.setValue({'enteredTopic':null, 'selectedSubject': null, 'selectedClass': null, 'selectedDate': null, 'selectedTime': null, 'enteredMeetingLink': null, 'selectedStartDate': null,'selectedEndDate': null});
    //console.log(this.scheduledData.get('selectedDate').value);
  }

  addRecurr() : void{
    this.addSingleclass = false;
    this.addRecurrenceclass = true;
    this.showSuccessMessage= false;
  
   // this.scheduledData.setValue({'enteredTopic':null, 'selectedSubject': null, 'selectedClass': null, 'selectedDate': null, 'selectedTime': null, 'enteredMeetingLink': null, 'selectedStartDate': null,'selectedEndDate': null});
  }

  subject: Subjects[] = [
    {subjectValue: 'english', subjectName: 'English'},
    {subjectValue: 'mathametics', subjectName: 'Mathametics'},
    {subjectValue: 'physics', subjectName: 'Physics'}
  ];

  class: Classes[] = [
    {classValue: '12', className: '12'},
    {classValue: '11', className: '11'},
    {classValue: '10', className: '10'},
    {classValue: '09', className: '09'},
    {classValue: '08', className: '08'}
  
  ];

  section: Section[] = [
    {sectionValue: 'A', sectionName: 'A'},
    {sectionValue: 'B', sectionName: 'B'},
    {sectionValue: 'C', sectionName: 'C'},
    {sectionValue: 'D', sectionName: 'D'},
    {sectionValue: 'E', sectionName: 'E'}
  ];

  Time: Times[] = [
    {timeValue: 'period-1', timeName: '9.30 AM - 10.30 AM'},
    {timeValue: 'period-3', timeName: '11.30 AM - 12.30 AM'},
    {timeValue: 'period-7', timeName: '16.30 AM - 17.30 AM'}
  
  ];

  showMeetingData : ShowMeetingData[] = [];

  scheduleMeeting() :void{
    console.log(this.scheduledData.value);

    this.showMeetingData.push({
      showSelectedClass : this.scheduledData.get('selectedClass').value,
      showSelectedSection : this.scheduledData.get('selectedSection').value,
      showsSelectedSubject : this.scheduledData.get('selectedSubject').value,
      showEnteredTopic: this.scheduledData.get('enteredTopic').value,
      showSelectedDate : this.scheduledData.get('selectedDate').value,
      showSelectedTime : this.scheduledData.get('selectedTime').value,
      showEnteredMeetingLink : this.scheduledData.get('enteredMeetingLink').value,
      showSelectedStartDate : this.scheduledData.get('selectedStartDate').value,
      showSelectedEndDate : this.scheduledData.get('selectedEndDate').value
    });

    this.showSuccessMessage = true;
    this.showMeetingTable =  false;
    this.addSingleclass =  false;
    this.addRecurrenceclass = false;

    var resetSingleForm = <HTMLFormElement>document.getElementById('teacher-schedule-meeting-form');
    resetSingleForm.reset(); 
    
    
  }

  remove(showMeetingData: ShowMeetingData): void {

    const index = this.showMeetingData.indexOf(showMeetingData);

    if (index >= 0) {
      this.showMeetingData.splice(index, 1);
    }

    if(index < 1){
      this.showSubmitButton = false;
    }

  }


  SubmitMeeting(){
    this.showSuccessMessage = true;
    this.showMeetingTable =  false;
    this.addSingleclass =  false;
    this.addRecurrenceclass = false;


  }

  onSubmit():void{

  }
}
