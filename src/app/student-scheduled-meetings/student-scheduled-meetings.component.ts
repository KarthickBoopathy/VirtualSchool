import { Component, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';  



export interface StudentScheduledClasses {
  subject: string;
  time: string;
  faculty: string;
  topic: string;
  join: string;
  }



@Component({
  selector: 'app-student-scheduled-meetings',
  templateUrl: './student-scheduled-meetings.component.html',
  styleUrls: ['./student-scheduled-meetings.component.css']
})
export class StudentScheduledMeetingsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  studentScheduledClasses: StudentScheduledClasses[] = [
    { subject: 'English', time: '10:30 AM', faculty: 'Ram', topic: 'Grammer', join: 'https://meet.google.com/ztd-cwdw-hkq?hs=151' },
    { subject: 'Maths', time: '11:30 AM', faculty: 'Sivaji', topic: 'Geometry' , join: 'https://meet.google.com/ztd-cwdw-hkq?hs=151'},
    { subject: 'Science', time: '12:30 PM', faculty: 'Rajini', topic: 'Pigments', join: 'https://meet.google.com/ztd-cwdw-hkq?hs=151' },
    { subject: 'History', time: '1:30 PM', faculty: 'Kamal', topic: 'Rivers', join: 'https://meet.google.com/ztd-cwdw-hkq?hs=151' },
    { subject: 'Economy', time: '2:30 PM', faculty: 'Ajith', topic: 'Commodities', join: 'https://meet.google.com/ztd-cwdw-hkq?hs=151' },
    ];



}
