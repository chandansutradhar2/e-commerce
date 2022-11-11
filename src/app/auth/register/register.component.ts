import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  genders: any[] = [
    { name: 'male', value: 'male' },
    { name: 'female', value: 'female' },
  ];

  regFrmGrp: FormGroup;
  constructor(fb: FormBuilder) {
    this.regFrmGrp = fb.group({
      fullName: [''],
      email: [''],
      mobileNo: [''],
      password: [''],
      confirmPassword: [''],
      dob: [''],
      gender: [''],
    });
  }

  ngOnInit(): void {}

  register() {
    console.log('====================================');
    console.log(this.regFrmGrp);
    console.log('====================================');

    if (this.regFrmGrp.valid) {
      let user: User = {
        dob: this.regFrmGrp.controls['dob'].value,
        email: this.regFrmGrp.controls['email'].value,
        fullName: this.regFrmGrp.controls['fullName'].value,
        gender: this.regFrmGrp.controls['gender'].value,
        mobileNo: this.regFrmGrp.controls['mobileNo'].value,
        password: this.regFrmGrp.controls['password'].value,
        picUrl: '',
      };

      console.log(user);
      setTimeout(() => {
        this.regFrmGrp.reset();
      }, 2000);
    } else {
      console.log('form is invalid pls fill it');
    }
  }
}
