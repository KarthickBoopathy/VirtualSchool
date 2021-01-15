import { Component, OnInit } from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-teacher-home',
  templateUrl: './teacher-home.component.html',
  styleUrls: ['./teacher-home.component.css']
})
export class TeacherHomeComponent implements OnInit {
  timelineValue : string = "Faculty Home";
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  GoToTeacherHome(){
    this.router.navigateByUrl('teacherHome'); 
  }
  GoToTeacherClassRoom(){
    this.router.navigateByUrl('teacherMyClassRoom'); 
    
  }
  GoToTeacherConductTest(){
    this.router.navigateByUrl('teacherConductTest'); 
  }
  GoToTeacherStudyMaterial(){
    
    this.router.navigateByUrl('teacherStudyMaterial'); 
  }
}
