import { Component, OnInit, OnChanges, OnDestroy } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import { SignupComponent } from '../signup/signup.component';


@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  showReachUS : Boolean ;


  ngOnInit(): void {
  
  }

  openDialog(){
    this.dialog.open(SignupComponent);
    
  }

  
  hideContent()  {
    document.getElementById("landingContentID").classList.toggle("togglebutton");
  
  }

  routeFromLanding( routingComponent : string)  {

    if(routingComponent == "reachUs")
    {
 
      document.getElementById("landingContentID").style.display = "none";
      //document.getElementById("reachUsID").style.display="block";
       this.showReachUS = true;

    }

      
  }





}
