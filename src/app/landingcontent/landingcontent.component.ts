import { Component, OnInit, OnDestroy, OnChanges } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';
import {MatDialog} from '@angular/material/dialog';
import { SignupComponent } from '../signup/signup.component';

@Component({
  selector: 'app-landingcontent',
  templateUrl: './landingcontent.component.html',
  styleUrls: ['./landingcontent.component.css']
})
export class LandingcontentComponent implements OnInit {

  constructor(public dialog: MatDialog) { }
  
  openDialog(){
    this.dialog.open(SignupComponent);
    
  }
  
  ngOnInit(): void {
    
  }
  

  
}
