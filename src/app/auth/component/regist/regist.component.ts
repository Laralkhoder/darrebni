import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-regist',
  templateUrl: './regist.component.html',
  styleUrls: ['./regist.component.css'],
})
export class RegistComponent {
  constructor(private service: AuthService) {}
  spec = [];
  rigesterForm: FormGroup;
  ngOnInit() {
    this.rigesterForm = new FormGroup({
      userName: new FormControl('', Validators.required),
      phone: new FormControl('', [Validators.required,Validators.pattern("^((\\+963-?)|0)[0-9]{9}$")]),
      spec: new FormControl('', Validators.required),
    });
    this.service.getspec().subscribe((res: any) => {
      console.log(res);
      this.spec = res.data;
      console.log(this.spec);
    });
  }
  RegisterUser() {
    let formData = new FormData();
    formData.append('user_name', this.rigesterForm.get('userName').value);
    formData.append('phone', this.rigesterForm.get('phone').value);
    formData.append('college_id', this.rigesterForm.get('spec').value);

    this.service.regist(formData).subscribe((res) => {
      console.log(res);
    });
    console.log(formData);



    
  }
}
