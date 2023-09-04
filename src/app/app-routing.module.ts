import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { ResultComponent } from './components/result/result.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { ProfileComponent } from './components/profile/profile.component';
import { DirectionsComponent } from './components/directions/directions.component';
import { QuestionComponent } from './components/question/question.component';
import { SelectionComponent } from './components/selection/selection.component';
import { QuestionsComponent } from './components/questions/questions.component';
import { CoursesComponent } from './components/courses/courses.component';
import { DialogComponent } from './components/dialog/dialog.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'home',component:HomeComponent},

  {path:'auth', loadChildren:()=>import('./auth/auth.module').then((m)=>m.AuthModule)},

  {path:'result',component:ResultComponent},
  {path:'dialog',component:DialogComponent},
  {path:'courses',component:CoursesComponent},
  {path:'selection',component:SelectionComponent},
  {path:'categories',component:CategoriesComponent},
  {path:'profile',component:ProfileComponent},
  {path:'directions',component:DirectionsComponent},
  {path:'questions',component:QuestionsComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
