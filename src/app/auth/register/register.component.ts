import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/models/user.model';
import { comparePasswordValidator } from './confirm-password.validator';

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
    this.regFrmGrp = fb.group(
      {
        fullName: ['', [Validators.required]],
        email: ['', [Validators.required, Validators.email]],
        mobileNo: [''],
        password: [''],
        confirmPassword: [''],
        dob: [''],
        gender: [''],
      },
      {
        validators: [],
      }
    );
  }

  ngOnInit(): void {}

  register() {
    console.log(this.regFrmGrp);

    if (this.regFrmGrp.valid) {
      let data = this.regFrmGrp.value;
      let user: User = {
        dob: data.dob,
        email: data.email,
        fullName: data.fullName,
        gender: data.gender,
        mobileNo: data.mobileNo,
        password: data.password,
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
