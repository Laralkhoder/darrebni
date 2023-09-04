import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

  getspec(){
  return  this.http.get('https://nationalexam.000webhostapp.com/api/colleges')
  }
  regist(modal:any){
    return  this.http.post('https://nationalexam.000webhostapp.com/api/auth/register',modal)
    }
    login(modal:any){
      return  this.http.post('https://nationalexam.000webhostapp.com/api/auth/login',modal)
      }

}
