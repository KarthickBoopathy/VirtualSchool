import { Component, OnInit } from '@angular/core';
import {MatSidenavModule} from '@angular/material/sidenav';
import { ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {MatCardModule} from '@angular/material/card'; 
import { MatDividerModule} from  '@angular/material/divider';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatAccordion} from '@angular/material/expansion';
import { Router } from '@angular/router';
 

export interface StudentSubjectList {
  subject : string;
  }


  
@Component({
  selector: 'app-student-subject-contents',
  templateUrl: './student-subject-contents.component.html',
  styleUrls: ['./student-subject-contents.component.css']
})
export class StudentSubjectContentsComponent implements OnInit {
  timelineValue : string = "Study Material"; 
  selectedChapter: string;
  //selectedTopic: string;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  subjectList : StudentSubjectList[] = [
    {subject : 'English'},
    {subject : 'Tamil'},
    {subject : 'Mathematics'},
    {subject : 'Physics'},
    {subject : 'Chemistry'},
    {subject : 'Botany'},
    {subject : 'Zoology'}
  ];
  

 
  getValue() {
//console.log(this.selectedChapter, this.selectedTopic);

  }


  GoToHome(){
    this.router.navigateByUrl('studentHome'); 
  }
 

  

}
