import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';


export interface InstitutionList {
  institutionName : string;
  }


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm : FormGroup;
  signupValidation : boolean;
  constructor() { }

  ngOnInit(): void {

    this.signupForm = new FormGroup({
      firstname : new FormControl(),
      lastname : new FormControl(),
      username : new FormControl(),
      emailid : new FormControl(),
      dateofbirth : new FormControl(),
      age : new FormControl(),
      institutionreferenceid : new FormControl(),
      institutionname : new FormControl(),
      createpassword : new FormControl(),
      confirmpassword : new FormControl()
    //  secretquestion : new FormControl(),
    //  secretanswer : new FormControl()
    
});

  }

  
  schoollist : InstitutionList[] = [

    {institutionName : 'Victoria Matric Higher sec School'},
    {institutionName : 'Infant Matric Higher sec School'},
    {institutionName : 'St.Josephs Matric Higher sec School'},
    {institutionName : 'Adhiparashakthi Matric Higher sec School'},
    {institutionName : 'Vedha Vikas Matric Higher sec School'}
  ];


  onSubmit():void{
    console.log(this.signupForm.value);
    this.signupValidation = true;
  }

  closeSignUp():void{
    document.getElementById("signupFormID").style.display = "none";

    
   
  }
}
