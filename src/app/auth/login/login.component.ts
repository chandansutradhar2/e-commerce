import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { User } from 'src/app/models/user.model';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [MessageService],
})
export class LoginComponent implements OnInit {
  mobileNo!: string;
  otp!: string;
  email: FormControl;
  password: FormControl;

  constructor(
    private router: Router,
    private msgSvc: MessageService,
    private authSvc: AuthService
  ) {
    this.email = new FormControl('', [Validators.required, Validators.email]);
    this.password = new FormControl('', [
      Validators.required,
      Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/),
    ]);

    this.password.valueChanges.subscribe((res) => {
      console.log(res);
      //password strength goes here
    });
  }

  ngOnInit(): void {}

  login() {
    if (this.email.valid && this.password.valid) {
      this.authSvc
        .login(this.email.value, this.password.value)
        .then((r) => {
          this.msgSvc.add({
            severity: 'success',
            life: 2000,
            detail: `Welcome back ${r.fullName}`,
            key: 'j',
          });

          setTimeout(() => {
            this.router.navigate(['']);
          }, 2000);
        })
        .catch((err) => {
          this.msgSvc.add({
            severity: 'error',
            detail: err,
            key: 'j',
          });
        });
    } else {
      this.msgSvc.add({
        severity: 'error',
        detail: 'please add email and password before login',
        key: 'j',
      });
    }
  }
}
