import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MainService } from 'src/app/services/main.service';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-selection',
  templateUrl: './selection.component.html',
  styleUrls: ['./selection.component.css']
})
export class SelectionComponent {
  id: any;
sub_id:any;
  alert:boolean=false;

  constructor(private service:MainService ,private dialogRef : MatDialog){}
speci=[]

  ngOnInit(){
    this.id=localStorage.getItem("college_id")
this.service.getcates(this.id).subscribe((res:any)=>{
this.speci=res.data;
})
}
SubjectId(id){
this.sub_id=id;
}

openDialog(){
  this.dialogRef.open(DialogComponent, {
    height: '150px',
    width: '350px',
    data:  this.sub_id
  }
  );
}}
