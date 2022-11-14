import { HttpClient } from '@angular/common/http';
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
  constructor(fb: FormBuilder, private http: HttpClient) {
    this.regFrmGrp = fb.group(
      {
        fullName: ['', [Validators.required]],
        email: ['', [Validators.required, Validators.email]],
        mobileNo: [''],
        password: [''],
        confirmPassword: [''],
        dob: [''],
        gender: [''],
        address: fb.group({
          line1: ['NPST 429, lodha `'],
          line2: ['wagle estate'],
          city: ['thane'],
          state: ['mh'],
          country: ['in'],
          pinCode: ['410086'],
        }),
      },
      {
        validators: [],
      }
    );
  }

  ngOnInit(): void {}

  register() {
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
        address: {
          city: data.address.city,
          country: data.address.country,
          line1: data.address.line1,
          line2: data.address.line2,
          pinCode: data.address.pincCode,
          state: data.address.state,
        },
      };

      console.log('formGroup=>', this.regFrmGrp, 'user=>', user);

      this.http
        .post('http://localhost:3000/register', user)
        .subscribe((r: any) => {
          r.status
            ? alert('account created successfully')
            : alert('failed to create account');
        });
    } else {
      console.log('form is invalid pls fill it');
    }
  }
}
