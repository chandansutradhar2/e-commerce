import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { User } from 'src/app/models/user.model';
import { AuthService } from '../auth.service';
import { comparePasswordValidator } from './confirm-password.validator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  providers: [MessageService],
})
export class RegisterComponent implements OnInit {
  genders: any[] = [
    { name: 'male', value: 'male' },
    { name: 'female', value: 'female' },
  ];

  regFrmGrp: FormGroup;
  constructor(
    fb: FormBuilder,
    public msgSvc: MessageService,
    private authSvc: AuthService
  ) {
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

      this.authSvc
        .createAccount(user)
        .then(() => {
          this.msgSvc.add({
            severity: 'success',
            detail: 'account created successfully',
            life: 2000,
            key: 'k',
          });
        })
        .catch((err) => {
          this.msgSvc.add({
            severity: 'error',
            detail: err,
            life: 2000,
            key: 'k',
          });
        });
    } else {
      this.msgSvc.add({
        severity: 'error',
        key: 'k',
        detail: 'please fill up the form properly!!!!!',
      });
    }
  }
}
