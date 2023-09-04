import { Component } from '@angular/core';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent {

  slides:any[];
  constructor(private service:MainService){}

  ngOnInit(){
this.service.getphoto().subscribe((res:any)=>{
this.slides=res.data;
console.log(this.slides)
})
}

activeSlide = 0;

showSlide(index: number) {
  this.activeSlide = index;
}
}
