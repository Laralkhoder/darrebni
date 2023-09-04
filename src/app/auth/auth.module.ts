import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistComponent } from './component/regist/regist.component';
import { LoginComponent } from './component/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';


const routes:Routes=[
{
  path:'login',component:LoginComponent
},{  path:'regist',component:RegistComponent
}
]

@NgModule({
  declarations: [
    RegistComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forChild(routes),
    HttpClientModule
  ],
  exports: [CommonModule, FormsModule, ReactiveFormsModule,RegistComponent,LoginComponent]
})
export class AuthModule {


}
