import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  createAccount(user: User): Promise<boolean | any> {
    return new Promise((resolve, reject) => {
      this.http.post('http://localhost:3000/register', user).subscribe(
        (r: any) => {
          r.status ? resolve(true) : reject(r.msg);
        },
        (err) => {
          reject(err.error.msg);
        }
      );
    });
  }

  login(email: string, password: string): Promise<User> {
    return new Promise((resolve, reject) => {
      this.http
        .post('http://localhost:3000/login', {
          email: email,
          password: password,
        })
        .subscribe(
          (r: any) => {
            if (r.status) {
              let user: User = r.data as User;
              resolve(user);
            } else {
              reject(r.msg);
            }
          },
          (err) => {
            console.log(err);
            reject('authentication failed due to network error');
          }
        );
    });
  }
}
