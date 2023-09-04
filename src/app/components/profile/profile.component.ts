import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators, FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  profileForm!: FormGroup;
  isUser: boolean = false

  imageUrl: string = '../../../assets/User.svg';
  selectedFile!: File;

  constructor(private service: MainService, private router: Router) { }


  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
    this.imageUrl = URL.createObjectURL(this.selectedFile);

    this.formData.append('photo', this.selectedFile);

  }

  ngOnInit() {
    this.profileForm = new FormGroup({
      newUserName: new FormControl('', Validators.required),
      newPhone: new FormControl('', Validators.required),
    });

    this.profileForm.patchValue({
      newUserName: localStorage.getItem('name'),
      newPhone: localStorage.getItem('phone')
    })
    if (localStorage.getItem('photo')) {
      this.imageUrl = localStorage.getItem('photo')!
    }
  }
  formData = new FormData();
  profile() {
    console.log(this.profileForm.value)

    this.formData.append('user_name', this.profileForm.get('newUserName')?.value);
    this.formData.append('phone', this.profileForm.get('newPhone')?.value);
    this.service.profile(this.formData).subscribe((res: any) => {
      console.log(res);
      localStorage.setItem('name', res.data.user_name)
      localStorage.setItem('phone', res.data.phone)
      localStorage.setItem('photo', res.data.photo)
    
      console.log(this.isUser)
      if (this.isUser) { this.router.navigate(['/home']) }
    });




  }
}

