import { Injectable } from '@angular/core';
import { Roletype } from 'src/app/application/domain/enum/roletype.enum'
import { Observable, Observer } from 'rxjs';
import { Users } from 'src/app/application/domain/external/users';
import { RouteConfigLoadEnd } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  role: Roletype = Roletype.USER;
  update: Observable<string>;
  observer: Observer<string>;
  user: Users = null;

  constructor() {
    this.update = Observable.create((observer: Observer<string>) => {
      this.observer = observer;

    });
  }

  updateCurrentRole(role: Roletype) {
    this.role = role;
  }

  updateCurrentUser(user: Users) {
    this.user = user;
  }
}