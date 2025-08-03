import { Component, OnInit } from '@angular/core';
import {CartService} from "src/app/services/cart.service";
import {AuthService} from "../../../auth/auth.service";

@Component({
  selector: 'header-component',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public loggedState: boolean = false;
  constructor(public cartService: CartService, private authService: AuthService) { }

  ngOnInit(): void {
    this.authService.isLoggedSubject.subscribe((isLoggedIn: boolean) => {
      this.loggedState = isLoggedIn;
      // logic ++
      console.log('State change: ' + this.loggedState);
    })
  }

  login() {
    this.authService.logIn()
  }

  logout() {
    this.authService.logOut()
  }

}
