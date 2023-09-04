import { Component } from '@angular/core';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent {

constructor(private service:MainService){}
uuid:any;
courses:any[];

ngOnInit(){
  this.uuid=localStorage.getItem("college_id")
  this.service.getCourses(this.uuid).subscribe((res:any)=>{
this.courses=res.data
  })
}

}
