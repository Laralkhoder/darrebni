import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor(private http:HttpClient) { }


  getcates(uuid){
    return  this.http.get('https://nationalexam.000webhostapp.com/api/subjects/'+uuid)
    }
    getphoto(){
      return this.http.get('https://nationalexam.000webhostapp.com/api/sliders')
    }

    getCourses(uuid){
      return this.http.get('https://nationalexam.000webhostapp.com/api/terms/'+uuid)
    }

    getUserInfo(){
    
      return this.http.get('https://nationalexam.000webhostapp.com/api/auth/profile/8292e606-9a61-4f8d-b1f4-aed94a74b126')
      // return this.http.get('https://nationalexam.000webhostapp.com/api/auth/profile/'+localStorage.getItem('id'))
  }
  
getquestions(){
  return this.http.get('https://nationalexam.000webhostapp.com/api/questions/'+localStorage.getItem('college_id'))
}
profile(modal: any) {
  // const headers = new HttpHeaders()
  //   .set('Authorization', Bearer ${token});
  console.log(localStorage.getItem('id'))
  return this.http.post('https://nationalexam.000webhostapp.com/api/auth/profile/' + localStorage.getItem('id'), modal)
}

}
