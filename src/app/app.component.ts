import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
//  title = 'VirtualSchool';


/*
Notes for Installed Packages :

ng add @angular/material
npm i -s @angular/flex-layout @angular/cdk
npm install apexcharts ng-apexcharts --save

*/

constructor(private router: Router){

}

ngOnInit(): void {
this.router.navigateByUrl('landing');

}
    
  

   
 

  
   
}
