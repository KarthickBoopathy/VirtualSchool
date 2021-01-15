import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {
  resetForm : FormGroup;
  constructor() { }

  ngOnInit(): void {

this.resetForm =  new FormGroup ({
  emailid : new FormControl(),
  temppassword : new FormControl(),
  createnewpassword : new FormControl(),
  confirmpassword : new FormControl()


});
 
    }

    onSubmit() : void{
      console.log(this.resetForm.value);

    }

    sendOTP():void{
      
document.getElementById('id-send-otp').style.display = "none";
document.getElementById('id-temp-pwd').style.display = "block";
document.getElementById('id-resend-otp-link').style.display = "block";
document.getElementById('temppassword').style.display = "block";



    }
    sendTempPassword():void{
      document.getElementById('id-temp-pwd').style.display = "none";
      document.getElementById('id-reset-pwd').style.display = "block";
      document.getElementById('temppassword').style.display = "none";
      document.getElementById('id-resend-otp-link').style.display = "none";
      document.getElementById('createnewpassword').style.display = "block";
      document.getElementById('confirmpassword').style.display = "block";
      
    }

    resendOTP():void{
      console.log("Resending OTP");
    }

    sendResetPassword():void{
      console.log(this.resetForm.value);
    }

    closeSignUp():void{
      document.getElementById("resetFormID").style.display = "none";
  
      
     
    }
  }


