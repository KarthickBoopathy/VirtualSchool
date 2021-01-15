import { Component, OnInit } from '@angular/core';


export interface TeacherMeetings{
Time : string;
Class : string;
Section : string;
Subject : string;
Topic : string;
Join : string;
}

@Component({
  selector: 'app-teacher-todays-meetings',
  templateUrl: './teacher-todays-meetings.component.html',
  styleUrls: ['./teacher-todays-meetings.component.css']
})
export class TeacherTodaysMeetingsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  teacherMeetings: TeacherMeetings[] = [
    { Time: '10:30 AM', Class: '11', Section : "A", Subject : "English", Topic: 'Grammer' , Join: 'https://meet.google.com/ztd-cwdw-hkq?hs=151' },
    { Time: '11:30 AM', Class: '10', Section : "B", Subject : "Mathametics", Topic: 'Algebra' , Join: 'https://meet.google.com/ztd-cwdw-hkq?hs=151' },
    { Time: '12:30 AM', Class: '12', Section : "C", Subject : "Physics", Topic: 'Projectile' , Join: 'https://meet.google.com/ztd-cwdw-hkq?hs=151' }
    ];

}
