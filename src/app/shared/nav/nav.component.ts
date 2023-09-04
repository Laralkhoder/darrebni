import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {


  isUser:boolean=false;

  navbarOpen = false;

ngOnInit(){
  if(localStorage.getItem('token')){
    this.isUser=true;}
}

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }
}
