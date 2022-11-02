import { Component, OnInit } from '@angular/core';
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
  constructor(private msgSvc: MessageService) {}

  ngOnInit(): void {}

  login() {
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
