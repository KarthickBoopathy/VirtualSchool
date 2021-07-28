import { Component, OnInit, OnDestroy, OnChanges } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDialog } from '@angular/material/dialog';
import { ResetPasswordComponent } from '../reset-password/reset-password.component';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})



export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loginValidation: boolean;
  show: boolean = false;
  constructor(private router: Router,
    public dialog: MatDialog) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      userName: new FormControl(),
      password: new FormControl()
    });
  }


  onSubmit(): void {
    console.log(this.loginForm.value);
    this.loginValidation = true;
    var loginUserName = this.loginForm.value.userName;

    if (loginUserName.toUpperCase() == 'STUDENT') {
      this.router.navigateByUrl('studentHome');
    }

    if (loginUserName.toUpperCase() == 'TEACHER') {
      this.router.navigateByUrl('teacherHome');
    }


  }

  resetPasswordForm(): void {
    console.log("Yes");
    this.dialog.open(ResetPasswordComponent);
  }

}
