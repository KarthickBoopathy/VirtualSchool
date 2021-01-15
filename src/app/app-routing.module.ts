import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LandingcontentComponent } from './landingcontent/landingcontent.component';
import { LoginComponent } from './login/login.component';
import {StudentHomeComponent} from './student-home/student-home.component';
import {LandingComponent} from './landing/landing.component';
import {ReachusComponent} from './reachus/reachus.component';
import {StudentSubjectContentsComponent} from './student-subject-contents/student-subject-contents.component';
import {StudentDashboardComponent} from './student-dashboard/student-dashboard.component';
import {StudentOnlineQuizComponent} from './student-online-quiz/student-online-quiz.component';
import { TeacherHomeComponent } from './teacher-home/teacher-home.component';
import {TeacherConductTestComponent} from './teacher-conduct-test/teacher-conduct-test.component'
import {StudentOnlineQuizDescriptionComponent} from './student-online-quiz-description/student-online-quiz-description.component'
import {StudentQuizQuestionsComponent} from './student-quiz-questions/student-quiz-questions.component';
import {TeacherMyClassRoomComponent} from './teacher-my-class-room/teacher-my-class-room.component';
import {TeacherStudyMaterialComponent} from './teacher-study-material/teacher-study-material.component';
import {StudentMyprofileComponent} from './student-myprofile/student-myprofile.component';

const routes: Routes = [
  { path: 'landingContent', component: LandingcontentComponent },
  { path: 'login', component: LoginComponent },
  { path: 'landing', component: LandingComponent },
  {path: 'studentHome', component: StudentHomeComponent },
  {path: 'reachUs', component: ReachusComponent },
  {path: 'studentSubjectContent', component: StudentSubjectContentsComponent },
  {path: 'studentDashboard', component: StudentDashboardComponent },
  {path: 'studentOnlineQuiz', component: StudentOnlineQuizComponent },
  {path: 'teacherHome', component: TeacherHomeComponent },
  {path: 'teacherConductTest', component: TeacherConductTestComponent },
  {path: 'studentOnlineQuizDescription', component: StudentOnlineQuizDescriptionComponent},
  {path: 'studentOnlineQuizQuestion', component: StudentQuizQuestionsComponent },
  {path: 'teacherMyClassRoom', component:TeacherMyClassRoomComponent},
  {path: 'teacherStudyMaterial', component:TeacherStudyMaterialComponent},
  {path: 'studentMyProfile', component:StudentMyprofileComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
