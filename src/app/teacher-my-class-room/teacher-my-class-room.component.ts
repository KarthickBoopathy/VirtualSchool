import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

/*export interface MyClass{
  StudentID  : string;
  StudentDetails : StudentRequiredDetails[];
}

export interface StudentRequiredDetails {
  StudentFirstName : string;
  StudentLastName : string;
}*/

export interface MyClass {
  StudentID: string;
  StudentFirstName: string;
  StudentLastName: string;
  Rank: string;
  OverallPercentage: string;
  DigitalExamPercentage: string;
  BloodGroup: string;
  Class : string;
  Section : string;
  ContactNumber1 : string;
  ContactNumber2 : string;
  EmailID: string;
}


@Component({
  selector: 'app-teacher-my-class-room',
  templateUrl: './teacher-my-class-room.component.html',
  styleUrls: ['./teacher-my-class-room.component.css']
})
export class TeacherMyClassRoomComponent implements OnInit {
  showDashboardContent : Boolean = false;
  showClassRoomTable: Boolean = true;
  timelineValue : string = "My Class Room";
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  myClass: MyClass[] = [

    {
      StudentID: "S12234",
      StudentFirstName: "Karthick",
      StudentLastName: "Boopathy",
      Rank: "9",
      OverallPercentage: "81%",
      DigitalExamPercentage: "72%",
      BloodGroup: "A1+",
      Class : "11",
      Section : "A",
      ContactNumber1 : "+919876543210",
      ContactNumber2 : "+919876543211",
      EmailID: "kb@gmail.com"
    },

    {
      StudentID: "S12235",
      StudentFirstName: "Deepak",
      StudentLastName: "Ramakrishnan",
      Rank: "8",
      OverallPercentage: "82%",
      DigitalExamPercentage: "75%",
      BloodGroup: "O+",
      Class : "11",
      Section : "A",
      ContactNumber1 : "+919876543210",
      ContactNumber2 : "+919876543211",
      EmailID: "dr@gmail.com"
    }
  ];

  


  /*
    myClass: MyClass[] = [
  
      {
        StudentID: "S12234",
        StudentDetails: [
          { StudentFirstName: "Karthick", StudentLastName: "Boopathy" }
        ]
      },
      {
        StudentID: "S12235",
        StudentDetails: [
          { StudentFirstName: "Deepak", StudentLastName : "Ramakrishnan"}
        ]
      }
  
  
    ];
  
  */





  GoToTeacherHome() {
    this.router.navigateByUrl('teacherHome');
  }

  GoToTeacherClassRoom() { }

  GoToTeacherConductTest() {
    
  }
  GoToTeacherStudyMaterial() { }

  GoToDashBoard(studentID : string){ 

    this.showDashboardContent = true;
    this.showClassRoomTable = false;
    this.timelineValue = "Student Name" ;
  }
  GoBack(){
    this.showDashboardContent = false;
    this.showClassRoomTable = true;
  }
}
