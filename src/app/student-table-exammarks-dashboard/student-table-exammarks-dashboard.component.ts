import { Component, OnInit } from '@angular/core';
import {MatTableModule} from '@angular/material/table';

/*
export interface Examscores{
  examName : string;
  scoreDetails : ScoreDetails[];
}

export interface ScoreDetails{
  subjectName : string;
  subjectMark : string;
}

*/


export interface ColumnHeader {
 // columnHeader : string;
 columnHeader : string[];
}

export interface RowValues {
  rows : string[];
} 


@Component({
  selector: 'app-student-table-exammarks-dashboard',
  templateUrl: './student-table-exammarks-dashboard.component.html',
  styleUrls: ['./student-table-exammarks-dashboard.component.css']
})
export class StudentTableExammarksDashboardComponent implements OnInit {



  constructor() { }

  ngOnInit(): void {
    
  }
/*

columns : ColumnHeader[] =[
  {columnHeader : 'Exam'},
  {columnHeader : 'English'},
  {columnHeader : 'Tamil'},
  {columnHeader : 'Maths'},
  {columnHeader : 'Science'},
  {columnHeader : 'Social'},
  {columnHeader : 'Geography'},
  {columnHeader : 'Civics'}
];
*/

columns : ColumnHeader[] =[
  {columnHeader : ["Exam", "English", "Tamil", "Maths", "Science", "Social", "Geography", "Civics"]}
];


row : RowValues[] = [
 { rows :  ["Term1","75","63","56","85","69","85","69"] },
 { rows :  ["Quarter","72","63","54","81","36","85","69"] },
 { rows :  ["Term2","75","63","56","85","69","85","69"] },
 { rows :  ["Half-Yr","72","63","54","81","36","85","69"] },
 { rows :  ["Term3","75","63","56","85","69","85","69"] },
 { rows :  ["Annual","72","63","54","81","36","85","69"] }
];




/*

  examScore : Examscores[]=[

    {'examName' : 'Term1', 
    'scoreDetails': [
      {'subjectName' : 'English', 'subjectMark' : '81'},
      {'subjectName' : 'Tamil', 'subjectMark' : '80'}
    ]
  },

  {'examName' : 'Term2', 
  'scoreDetails': [
    {'subjectName' : 'English', 'subjectMark' : '73'},
    {'subjectName' : 'Tamil', 'subjectMark' : '99'}
  ]
}

  ];

  */

 


}
