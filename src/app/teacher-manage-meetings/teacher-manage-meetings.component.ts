import { Component, OnInit } from '@angular/core';

export interface MeetingList {
  Class : string;
  Section : string;
  Subject : string;
  Topic : string;
  Time : string;

}

@Component({
  selector: 'app-teacher-manage-meetings',
  templateUrl: './teacher-manage-meetings.component.html',
  styleUrls: ['./teacher-manage-meetings.component.css']
})
export class TeacherManageMeetingsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  meetingList : MeetingList[] = [
    {Class : "11", Section : "A", Subject: "English", Topic : "Grammer", Time : "10.30 AM"},
    {Class : "12", Section : "B", Subject: "Mathametics", Topic : "Trignometry", Time : "11.30 AM"}
  ];

  remove(meeting: MeetingList){
    console.log(meeting);

  }

}
