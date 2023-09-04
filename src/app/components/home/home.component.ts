
import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth/service/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

spec:any[]=[]

clicked = false;

isUser:boolean=false;

id:string;

constructor(private service:AuthService){}

ngOnInit(){

  this.service.getspec().subscribe((res:any) =>{
    console.log(res)
    this.spec=res.data;
  })

  if(localStorage.getItem('token')){
this.isUser=true;
this.id=localStorage.getItem('college_id')
  }
}

specClick(){
  this.clicked = !this.clicked;
}
}
