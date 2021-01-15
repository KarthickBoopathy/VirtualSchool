import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './login/login.component';
import { LandingcontentComponent } from './landingcontent/landingcontent.component';
import { ReachusComponent } from './reachus/reachus.component';


import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';

import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSelectModule} from '@angular/material/select';


import { MatSliderModule } from '@angular/material/slider';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import { StudentHomeComponent } from './student-home/student-home.component';


import { MatDividerModule} from  '@angular/material/divider';
import { StudentSubjectsComponent } from './student-subjects/student-subjects.component'

import {MatRippleModule} from '@angular/material/core';
import { StudentSubjectContentsComponent } from './student-subject-contents/student-subject-contents.component';
import {MatExpansionModule} from '@angular/material/expansion';

import {MatMenuModule} from '@angular/material/menu';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { NgApexchartsModule } from "ng-apexcharts";
import { StudentAreachartPerformanceComponent } from './student-areachart-performance/student-areachart-performance.component';
import { StudentBarchartSubjectmarksComponent } from './student-barchart-subjectmarks/student-barchart-subjectmarks.component';
import { StudentTableExammarksDashboardComponent } from './student-table-exammarks-dashboard/student-table-exammarks-dashboard.component';
import { SignupComponent } from './signup/signup.component';
import {MatDialogModule} from '@angular/material/dialog';
import { StudentOnlineQuizComponent } from './student-online-quiz/student-online-quiz.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { TeacherHomeComponent } from './teacher-home/teacher-home.component';
import { TeacherHomeContentComponent } from './teacher-home-content/teacher-home-content.component';
import {MatTabsModule} from '@angular/material/tabs';
import { TeacherScheduleClassComponent } from './teacher-schedule-class/teacher-schedule-class.component';
import { StudentScheduledMeetingsComponent } from './student-scheduled-meetings/student-scheduled-meetings.component';
import { MatTableModule } from '@angular/material/table';
import { StudentQuizQuestionsComponent } from './student-quiz-questions/student-quiz-questions.component' ;
import { StudentDashboardComponent } from './student-dashboard/student-dashboard.component';
import { CdkColumnDef } from '@angular/cdk/table';
import {MatDatepickerModule} from '@angular/material/datepicker';

import {MatNativeDateModule} from '@angular/material/core';
import { TeacherConductTestComponent } from './teacher-conduct-test/teacher-conduct-test.component';
import { TeacherConductHandwrittenTestComponent } from './teacher-conduct-handwritten-test/teacher-conduct-handwritten-test.component';

import {MatChipsModule} from '@angular/material/chips';

import {MatRadioModule} from '@angular/material/radio';
import { TeacherConductOnlineQuizComponent } from './teacher-conduct-online-quiz/teacher-conduct-online-quiz.component';
import { StudentOnlineQuizDescriptionComponent } from './student-online-quiz-description/student-online-quiz-description.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { StudentAttendanceComponent } from './student-attendance/student-attendance.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { TeacherMyClassRoomComponent } from './teacher-my-class-room/teacher-my-class-room.component';
import { StudentDashboardContentComponent } from './student-dashboard-content/student-dashboard-content.component';
import { TeacherExamLibraryComponent } from './teacher-exam-library/teacher-exam-library.component';
import { TeacherQuizLibraryComponent } from './teacher-quiz-library/teacher-quiz-library.component';
import { TeacherStudyMaterialComponent } from './teacher-study-material/teacher-study-material.component';
import { StudyMaterialContentComponent } from './study-material-content/study-material-content.component';
import { TeacherManageMaterialComponent } from './teacher-manage-material/teacher-manage-material.component';
import { MatFileUploadModule } from 'mat-file-upload';
import { TeacherManageMeetingsComponent } from './teacher-manage-meetings/teacher-manage-meetings.component';
import { TeacherTodaysMeetingsComponent } from './teacher-todays-meetings/teacher-todays-meetings.component';
import { TeacherConductedTestComponent } from './teacher-conducted-test/teacher-conducted-test.component';
import { StudentMyprofileComponent } from './student-myprofile/student-myprofile.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    LoginComponent,
    LandingcontentComponent,
    ReachusComponent,
    StudentHomeComponent,
    StudentSubjectsComponent,
    StudentSubjectContentsComponent,
    StudentDashboardComponent,
    StudentAreachartPerformanceComponent,
    StudentBarchartSubjectmarksComponent,
    StudentTableExammarksDashboardComponent,
    SignupComponent,
    StudentOnlineQuizComponent,
    ResetPasswordComponent,
    TeacherHomeComponent,
    TeacherHomeContentComponent,
    TeacherScheduleClassComponent,
    StudentScheduledMeetingsComponent,
    StudentQuizQuestionsComponent,
    TeacherConductTestComponent,
    TeacherConductHandwrittenTestComponent,
    TeacherConductOnlineQuizComponent,
    StudentOnlineQuizDescriptionComponent,
    ChangePasswordComponent,
    StudentAttendanceComponent,
    TeacherMyClassRoomComponent,
    StudentDashboardContentComponent,
    TeacherExamLibraryComponent,
    TeacherQuizLibraryComponent,
    TeacherStudyMaterialComponent,
    StudyMaterialContentComponent,
    TeacherManageMaterialComponent,
    TeacherManageMeetingsComponent,
    TeacherTodaysMeetingsComponent,
    TeacherConductedTestComponent,
    StudentMyprofileComponent
    
  ], 
  entryComponents : [
    SignupComponent,
    ResetPasswordComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    FormsModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatListModule,
    MatIconModule,
    MatDividerModule,
    MatRippleModule,
    MatExpansionModule,
    MatMenuModule,
    MatProgressBarModule,
    NgApexchartsModule,
    MatDialogModule,
    MatTabsModule,
    MatTableModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatChipsModule,
    MatRadioModule,
    MatCheckboxModule,
    MatFileUploadModule

  ],
  providers: [CdkColumnDef,MatDatepickerModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
