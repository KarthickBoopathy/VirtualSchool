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
  selector: 'app-student-areachart-performance',
  templateUrl: './student-areachart-performance.component.html',
  styleUrls: ['./student-areachart-performance.component.css']
})
export class StudentAreachartPerformanceComponent implements OnInit {

  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  constructor() { 
    this.chartOptions = {

      series :[
        {
          name: "Score - In Percent",
          data: [52, 73, 61, 42, 81, 72]
        }
      ],
      chart: {
    
        height:350,
        type:"area"
    
      },
    
      title :{
        text: "Performance Chart"
      },
      xaxis:{
        categories:["T-1", "Quarter", "T-2", "Half-Yr", "T-3", "Annual"]
      }
      
    };

  }

  ngOnInit(): void {
  }

}
