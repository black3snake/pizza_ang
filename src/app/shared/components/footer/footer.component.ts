import {AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {CartService} from "src/app/services/cart.service";
import {Subscription} from "rxjs";
import {AuthService} from "../../../core/auth/auth.service";

@Component({
  selector: 'footer-component',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit, AfterViewInit, OnDestroy {

  @ViewChild('yearSpan', { static: true }) yearSpan!: ElementRef<HTMLSpanElement>;
  private subscription!: Subscription;
  public loggedStateHeader: boolean = false;
  // public currentYear = new Date().getFullYear();

  constructor(public cartService: CartService, private authService: AuthService) {  }

  ngOnInit(): void {
    this.yearSpan.nativeElement.textContent = '2020';
    this.subscription = this.authService.isLoggedSubject.subscribe((isLoggedIn: boolean) => {
      this.loggedStateHeader = isLoggedIn;
      // logic ++
      console.log('State change: ' + this.loggedStateHeader);
      if(isLoggedIn) {
        this.yearSpan.nativeElement.textContent = new Date().getFullYear().toString();
      } else {
        this.yearSpan.nativeElement.textContent = '2020+';
      }
    });
  }


  ngAfterViewInit() {
    // console.log(this.year.nativeElement.textContent);
      // = new Date().getFullYear().toString();
    // this.year.nativeElement.textContent = new Date().getFullYear().toString();

    // if(this.loggedStateHeader) {
    //   this.year.nativeElement.textContent = new Date().getFullYear().toString();
    // }
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
