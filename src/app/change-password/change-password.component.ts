import { Component, OnInit } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  changePasswordForm : FormGroup; 
  showMessage : Boolean = false;
  constructor() { }

  ngOnInit(): void {

    this.changePasswordForm = new FormGroup({
      newPassword : new FormControl(),
      confirmPassword : new FormControl()
});
  }

  onSubmit(): void{
   
  }

  SubmitChangePassword() {
    console.log(this.changePasswordForm.value);
    var resetForm = <HTMLFormElement>document.getElementById('id-change-pwd');
    resetForm.reset(); 
    this.showMessage = true;
    
  }

}
