import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexTitleSubtitle,
  ApexYAxis
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  title: ApexTitleSubtitle;
};

@Component({
  selector: 'app-student-barchart-subjectmarks',
  templateUrl: './student-barchart-subjectmarks.component.html',
  styleUrls: ['./student-barchart-subjectmarks.component.css']
})
export class StudentBarchartSubjectmarksComponent implements OnInit {

  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  constructor() { 

    this.chartOptions = {

      series :[
        {
          name: "Score",
          data: [52, 73, 61, 42, 81, 40, 91]
        }
      ],
      chart: {
    
        height:350,
        type:"bar"
    
      },
    
      title :{
        text: "Subject Marks"
      },
      xaxis:{
        categories:["Eng", "Tam", "Mat", "Phy", "Chem", "Bio", "Comp"]
      }
      
    };

  }

  ngOnInit(): void {
  }

}
