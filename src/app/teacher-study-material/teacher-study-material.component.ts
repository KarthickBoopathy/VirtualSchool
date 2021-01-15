import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import {MatTabsModule} from '@angular/material/tabs';
import {MatButtonModule} from '@angular/material/button';
import { MatFileUploadModule } from 'mat-file-upload';
import {  Input, ViewChild, ElementRef } from "@angular/core";
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

export interface StudentSubjectList {
  subject : string;
  }

export interface Classes{
  ClassName : string;
}

export interface UploadType{
  Type : string;
}

export interface Chapters{
  Chapter : string;
}


@Component({
  selector: 'app-teacher-study-material',
  templateUrl: './teacher-study-material.component.html',
  styleUrls: ['./teacher-study-material.component.css']
})
export class TeacherStudyMaterialComponent implements OnInit {

  @Input()
  mode
  @Input()
  names
  @Input()
  url
  @Input()
  method
  @Input()
  multiple
  @Input()
  disabled
  @Input()
  accept
  @Input()
  maxFileSize
  @Input()
  auto = true
  @Input()
  withCredentials
  @Input()
  invalidFileSizeMessageSummary
  @Input()
  invalidFileSizeMessageDetail
  @Input()
  invalidFileTypeMessageSummary
  @Input()
  invalidFileTypeMessageDetail
  @Input()
  previewWidth
  @Input()
  chooseLabel = 'Choose File'
  @Input()
  customUpload
  @Input()
  showUploadButton
  @Input()
  showCancelButton
  
  
  @Input()
  dataUriPrefix
  @Input()
  deleteButtonLabel
  @Input()
  deleteButtonIcon = 'close'
  @Input()
  showUploadInfo
  @ViewChild('fileUpload')
  fileUpload: ElementRef
  
  inputFileName: string
  
  @Input()
  files: File[] = []


  timelineValue : string = "Study Material";
  selectedUploadData : FormGroup; 

  constructor(private router: Router,
    private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.selectedUploadData = new FormGroup({
      selectedClass : new FormControl(),
      selectedMaterialType : new FormControl(),
      selectedChapter : new FormControl(),
      enteredTitle : new FormControl(),
      uploadedFile : new FormControl()
});
  }
  subjectList : StudentSubjectList[] = [
    {subject : 'English'},
    {subject : 'Tamil'},
    {subject : 'Mathematics'},
    {subject : 'Physics'},
    {subject : 'Chemistry'},
    {subject : 'Botany'},
    {subject : 'Zoology'}
  ];


  studentClass : Classes[] = [
    {ClassName : '11'},
    {ClassName : '12'},
    {ClassName : '10'},

  ];

  uploadType : UploadType[] = [
    {Type : 'Document'},
    {Type : 'Video'}
  ];

  existingChapter : Chapters[] = [
    {Chapter : 'Chapter 1'},
    {Chapter : 'Chapter 2'},
    {Chapter : 'Chapter 3'},
    {Chapter : 'Chapter 4'},
    {Chapter : 'Chapter 5'}
  ];
  
  GoToHome(){
    this.router.navigateByUrl('teacherHome');  
  }

  onSubmitUploadData(){}
 
  fileToUpload: File = null;

  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);

    console.log(this.fileToUpload);
    }


    //Upload Files 

    onClick(event) {
      if (this.fileUpload)
      this.fileUpload.nativeElement.click()
      }

      onFileSelected(event) {
        let files = event.dataTransfer ? event.dataTransfer.files : event.target.files;
        console.log('event::::::', event)
        for (let i = 0; i < files.length; i++) {
        let file = files[i];
        if (this.validate(file)) {
        file.objectURL = this.sanitizer.bypassSecurityTrustUrl((window.URL.createObjectURL(files[i])));
        if (!this.isMultiple()) {
        this.files = []
        }
        this.files.push(files[i]);
        }
        }
        }
        
        removeFile(event, file) {
        let ix
        if (this.files && -1 !== (ix = this.files.indexOf(file))) {
        this.files.splice(ix, 1)
        this.clearInputElement()
        }
        }
        
        validate(file: File) {
        for (const f of this.files) {
        if (f.name === file.name
        && f.lastModified === file.lastModified
        && f.size === f.size
        && f.type === f.type
        ) {
        return false
        }
        }
        return true
        }
        
        clearInputElement() {
        this.fileUpload.nativeElement.value = ''
        }
        
        
        isMultiple(): boolean {
        return this.multiple
        }
        
        onSubmit(event) {
        console.log("on submit");
        console.log(this.files);
        }

    


}
