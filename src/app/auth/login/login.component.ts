import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';

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

  constructor(private msgSvc: MessageService) {
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
    console.log(this.email, this.password);

    alert(`email:${this.email.value}, password: ${this.password.value}`);

    if (this.mobileNo == '8080811145' && this.otp == '1234') {
      this.msgSvc.add({
        severity: 'success',
        life: 3000,
        key: 'k',
        detail: 'Welcome back Mr Chandan',
      });
    } else {
      this.msgSvc.add({
        severity: 'error',
        key: 'k',
        detail: 'Invalid OTP entered',
      });
    }
  }
}
