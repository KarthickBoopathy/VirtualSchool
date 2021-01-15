import { Component, OnInit } from '@angular/core';


export interface MaterialList {
  FileID : string;
  Class : string;
  Subject : string;
  Type : string;
  Title : string;
}

@Component({
  selector: 'app-teacher-manage-material',
  templateUrl: './teacher-manage-material.component.html',
  styleUrls: ['./teacher-manage-material.component.css']
})
export class TeacherManageMaterialComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  materialList : MaterialList[] = [
    {
      FileID : "D12",
      Class : "11",
      Subject : "Mathametics",
      Type : "Document",
      Title : "Thermodynamics and its uses"
    },
    {
      FileID : "V12",
      Class : "11",
      Subject : "Mathametics",
      Type : "Video",
      Title : "Thermodynamics"
    }
  ];

  remove(materialList : MaterialList){
    
  }
}
