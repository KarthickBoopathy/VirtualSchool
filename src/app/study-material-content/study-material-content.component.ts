import { Component, OnInit } from '@angular/core';


export interface VideoList {
  videosToPlay : string;
  title : string;
  }

  export interface DocumentList {
    DocsToRead : string;
    title : string;
    }

    export interface Chapters {
      chapterValue: string;
      chapterName: string;
    } 

    export interface Topics {
      topicValue: string;
      topicName: string;
    }

    
@Component({
  selector: 'app-study-material-content',
  templateUrl: './study-material-content.component.html',
  styleUrls: ['./study-material-content.component.css']
})
export class StudyMaterialContentComponent implements OnInit {
  selectedChapter: string;
  constructor() { }

  ngOnInit(): void {
  }
  chapter: Chapters[] = [
    {chapterValue: 'computerbasics', chapterName: 'Computer Basics'},
    {chapterValue: 'java', chapterName: 'Java'},
    {chapterValue: 'microservices', chapterName: 'MicroServices'},
    {chapterValue: 'dotnet', chapterName: 'DotNet'},
  ];

  topic: Topics[] = [
    {topicValue: 'phython', topicName: 'Phython'},
    {topicValue: 'java', topicName: 'Java'},
    {topicValue: 'microservices', topicName: 'MicroServices'},
    {topicValue: 'dotnet', topicName: 'DotNet'},
  ];


  //Notes: Title should only be within 35 Characters.
  availableVideos : VideoList[] = [

    {videosToPlay : '../../assets/Videos/Dheere_Dheere_Se_Meri_Zindagi_Video_Song_(OFFICIAL)_Hrithik_Roshan,_Sonam_Ka.mp4', title:"Thermodynamics and its uses"},
    {videosToPlay : '../../assets/Videos/Dheere_Dheere_Se_Meri_Zindagi_Video_Song_(OFFICIAL)_Hrithik_Roshan,_Sonam_Ka.mp4', title:"Thermodynamics, roots and its uses"},
    {videosToPlay : '../../assets/Videos/Dheere_Dheere_Se_Meri_Zindagi_Video_Song_(OFFICIAL)_Hrithik_Roshan,_Sonam_Ka.mp4', title:"Thermodynamics"},
    {videosToPlay : '../../assets/Videos/Dheere_Dheere_Se_Meri_Zindagi_Video_Song_(OFFICIAL)_Hrithik_Roshan,_Sonam_Ka.mp4', title:"Thermodynamics"},
    {videosToPlay : '../../assets/Videos/Dheere_Dheere_Se_Meri_Zindagi_Video_Song_(OFFICIAL)_Hrithik_Roshan,_Sonam_Ka.mp4', title:"Thermodynamics"},
    {videosToPlay : '../../assets/Videos/Dheere_Dheere_Se_Meri_Zindagi_Video_Song_(OFFICIAL)_Hrithik_Roshan,_Sonam_Ka.mp4', title:"Thermodynamics"}
  ];


  availableDocs : DocumentList[] = [

    {DocsToRead : '../../assets/Docs/Doc1.pdf', title:"Thermodynamics and its uses"},
    {DocsToRead : '../../assets/Docs/Doc1.pdf', title:"Thermodynamics and its uses"},
    {DocsToRead : '../../assets/Docs/Doc1.pdf', title:"Thermodynamics and its uses"},
    {DocsToRead : '../../assets/Docs/Doc1.pdf', title:"Thermodynamics and its uses"},
    {DocsToRead : '../../assets/Docs/Doc1.pdf', title:"Thermodynamics and its uses"},
    {DocsToRead : '../../assets/Docs/Doc1.pdf', title:"Thermodynamics and its uses"},
    {DocsToRead : '../../assets/Docs/Doc1.pdf', title:"Thermodynamics and its uses"},
    {DocsToRead : '../../assets/Docs/Doc1.pdf', title:"Thermodynamics and its uses"},

  ];
  
 
  getValue() {
//console.log(this.selectedChapter, this.selectedTopic);

  }
}
