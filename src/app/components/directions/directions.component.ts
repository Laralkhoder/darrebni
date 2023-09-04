import { Component } from '@angular/core';

@Component({
  selector: 'app-directions',
  templateUrl: './directions.component.html',
  styleUrls: ['./directions.component.css']
})
export class DirectionsComponent {

  clicked:boolean=false;

  show(){
this.clicked=true;
  }
}
