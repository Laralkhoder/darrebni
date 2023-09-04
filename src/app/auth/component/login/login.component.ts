import { Component } from '@angular/core';
import { AuthService } from '../../service/auth.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginForm:FormGroup;
isUser:boolean=false;



  constructor(private service:AuthService,private router: Router){}
  
  
  ngOnInit() {
    this.loginForm = new FormGroup({
      userName: new FormControl('', Validators.required),
      code: new FormControl('', Validators.required),
    });

    
  
  }
  

  loginUser() {
    let formData = new FormData();
    formData.append('user_name', this.loginForm.get('userName').value);
    formData.append('code', this.loginForm.get('code').value);

    this.service.login(formData).subscribe((res:any) => {
      console.log(res);
      if(res.data.token){
        this.isUser=true;
        localStorage.setItem('token',res.data.token)
        localStorage.setItem('name',res.data.user_name)
        localStorage.setItem('college_name',res.data.college_name)
        localStorage.setItem('college_id',res.data.college_id)
        localStorage.setItem('id',res.data.id)
      }
      console.log(this.isUser)
      if(this.isUser){this.router.navigate(['/home'])}
    });
    
    console.log(formData);


  }

}
