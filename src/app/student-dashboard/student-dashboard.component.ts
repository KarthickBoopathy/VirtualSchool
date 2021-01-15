import { Component, OnInit } from '@angular/core';
import { MatDividerModule} from  '@angular/material/divider';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatAccordion} from '@angular/material/expansion';
import { Title } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';
import {MatMenuModule} from '@angular/material/menu';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { Router } from '@angular/router';




@Component({
  selector: 'app-student-dashboard',
  templateUrl: './student-dashboard.component.html',
  styleUrls: ['./student-dashboard.component.css']
})
export class StudentDashboardComponent implements OnInit {
  timelineValue : string = "Dashboard";




  constructor(private router: Router) { 


  }

  ngOnInit(): void {
  }

  GoToHome(){
    this.router.navigateByUrl('studentHome'); 
  }

  GoToSubjectContent(){
    
    this.router.navigateByUrl('studentSubjectContent'); 
  }
    
}


