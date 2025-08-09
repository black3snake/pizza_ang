import {Injectable} from '@angular/core';
import {Subject} from "rxjs";

@Injectable()
export class AuthService {

  constructor() {
  }

  public isLoggedSubject: Subject<boolean> = new Subject<boolean>();
  private isLogged = false;

  logIn() {
    this.isLogged = true;
    this.isLoggedSubject.next(this.isLogged);
  }

  logOut() {
    this.isLogged = false;
    this.isLoggedSubject.next(this.isLogged);
  }

  getToken(): string {
    return "token-958459845";
  }

  isLoggedIn(): boolean {
    return this.isLogged;
  }

}
