import { Component, OnInit } from '@angular/core';
import {MatSidenavModule} from '@angular/material/sidenav';
import { ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {MatCardModule} from '@angular/material/card'; 
import { MatDividerModule} from  '@angular/material/divider'
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-home',
  templateUrl: './student-home.component.html',
  styleUrls: ['./student-home.component.css']
})
export class StudentHomeComponent implements OnInit {
  timelineValue : string = "Home";
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  showFiller = false;

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
  OpenProfile() {
    this.router.navigateByUrl('studentMyProfile');
  }
  
}
