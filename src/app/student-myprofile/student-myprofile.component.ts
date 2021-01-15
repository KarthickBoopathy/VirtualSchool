import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-student-myprofile',
  templateUrl: './student-myprofile.component.html',
  styleUrls: ['./student-myprofile.component.css']
})
export class StudentMyprofileComponent implements OnInit {
  timelineValue : string = "My Profile";
  isDisabled:boolean = false;
  constructor(private router: Router) { }

  ngOnInit(): void {

  }
  GoToHome(){
    this.router.navigateByUrl('studentHome'); 
  }
  GoToExamRoom(){
    this.router.navigateByUrl('studentHome'); 
  }
  GoToOnlineQuiz(){
    this.router.navigateByUrl('studentOnlineQuiz'); 
  }
  GoToDashBoard(){ 
   this.router.navigateByUrl('studentDashboard'); 

  }
  EditField(){
    this.isDisabled = false
  }
  
  Submit(){
    this.isDisabled = true
 }
 

}
