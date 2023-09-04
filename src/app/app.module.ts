import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './components/home/home.component';
import { NavComponent } from './shared/nav/nav.component';
import { FooterComponent } from './shared/footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthModule } from './auth/auth.module';
import { ResultComponent } from './components/result/result.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { HttpClientModule } from '@angular/common/http';
import { ProfileComponent } from './components/profile/profile.component';
import { QuestionComponent } from './components/question/question.component';
import { DirectionsComponent } from './components/directions/directions.component';
import { SelectionComponent } from './components/selection/selection.component';
import { CarouselComponent } from './shared/carousel/carousel.component';
import { QuestionsComponent } from './components/questions/questions.component';
import { CoursesComponent } from './components/courses/courses.component';
import { DialogComponent } from './components/dialog/dialog.component';

import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatDialogModule} from '@angular/material/dialog';
import { BackComponent } from './shared/back/back.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    FooterComponent,
    ResultComponent,
    CategoriesComponent,
    ProfileComponent,
    QuestionComponent,
    DirectionsComponent,
    SelectionComponent,
    CarouselComponent,
    QuestionsComponent,
    CoursesComponent,
    DialogComponent,
    BackComponent,
    // MatCarouselModule.forRoot()
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    AuthModule,
    MatDialogModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
