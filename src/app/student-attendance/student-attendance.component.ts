import { Component, OnInit } from '@angular/core';
import { MatCheckboxModule } from '@angular/material/checkbox';

export interface MyStudents {
  StudentID: string;
  StudentFirstName: string;
  StudentLastName: string;
  Status: Boolean;
}



@Component({
  selector: 'app-student-attendance',
  templateUrl: './student-attendance.component.html',
  styleUrls: ['./student-attendance.component.css']
})
export class StudentAttendanceComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  myStudents: MyStudents[] = [
    { StudentID: "S1224", StudentFirstName: "Karthick", StudentLastName: "Boopathy", Status: false },
    { StudentID: "S1225", StudentFirstName: "Deepak", StudentLastName: "Ramakrishnan", Status: false },
    { StudentID: "S1226", StudentFirstName: "Ragu", StudentLastName: "Ram", Status: false },
    { StudentID: "S1227", StudentFirstName: "Arun", StudentLastName: "Balaji", Status: false }
  ];

  attendanceStatus: MyStudents[] = [];

  checkValue(attendStatus: MyStudents) {
    var element = <HTMLInputElement>document.getElementById(attendStatus.StudentID);
    var isChecked = element.checked;

    if (isChecked) {
      this.attendanceStatus.push({
        StudentID: attendStatus.StudentID,
        StudentFirstName: attendStatus.StudentFirstName,
        StudentLastName: attendStatus.StudentLastName,
        Status: isChecked
      });
    }

    if (!isChecked) {
      for (var i = 0, len = this.attendanceStatus.length; i < len; i++) {
        if ((this.attendanceStatus[i].StudentID == attendStatus.StudentID)) {
          this.attendanceStatus.splice(i, 1);
          break;
        }
      }
    }
  }

  SubmitAttendance(){
    
    console.log(JSON.stringify(this.attendanceStatus));
}
}

