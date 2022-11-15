import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class StateService {
  private _user!: User;

  public get user(): User {
    return this._user;
  }

  public set user(v: User) {
    this._user = v;
  }

  constructor() {}
}
