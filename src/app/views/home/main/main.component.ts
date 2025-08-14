import {AfterViewInit, Component, ElementRef, OnDestroy, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {from, map, Observable, Subject, Subscription} from "rxjs";
import {CartService} from "../../../shared/services/cart.service";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {PopupComponent} from "../../../shared/components/popup/popup.component";
import {environment} from "../../../../environments/environment";


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit, OnDestroy, AfterViewInit {

  // private observable: Observable<number>;

  // private promise: Promise<string>;
  private subscribption: Subscription | null = null;
  private subscribption2: Subscription | null = null;
  private subject: Subject<number>;

  constructor(public cartService: CartService, private modalService: NgbModal) {
    // this.promise = new Promise<string>((resolve, reject) => {
    //   setTimeout(() => {
    //     resolve('hello Promise');
    //   }, 3000)
    // })

    this.subject = new Subject<number>();
    let counter = 0;
    const interval = setInterval(() => {
      this.subject.next(counter++);
    }, 1000);
    const timeout1 = setTimeout(() => {
      this.subject.complete();
    }, 4000);

    // this.observable = new Observable(observer => {
    //   let counter = 0;
    //   const interval = setInterval(() => {
    //     observer.next(counter++);
    //   }, 1000);
    //   const timeout1 = setTimeout(() => {
    //     observer.complete();
    //   }, 4000);
    //   const timeout2 = setTimeout(() => {
    //     observer.error('hello Observable ERRor');
    //   }, 5000);
    //   return {
    //     unsubscribe() {
    //       clearInterval(interval);
    //       clearTimeout(timeout1);
    //       clearTimeout(timeout2);
    //     }
    //   }
    // })

    // this.observable = from([1, 2, 3, 4, 5]);
  }

  // private modalRef!: NgbModalRef;

  ngOnInit() {

    console.log(environment)
    // const myModalAlternative = new bootstrap.Modal('#myModal', {})
    // myModalAlternative.show();
    this.subscribption = this.subject
      .subscribe(
        {
          next: (param: number) => {
            console.log('subscribe 1, ', param);
          },
          error: (error: string) => {
            console.log('Error!!!, ', error)
          }
        }
      )
  }

  @ViewChild(PopupComponent)
  private popupComponent!: PopupComponent;

  ngAfterViewInit() {

    this.popupComponent.open();

    // const modalRef = this.modalService.open(PopupComponent);
    // modalRef.componentInstance.data = 'Main component';

    // this.modalRef  = this.modalService.open(this.popup, {})
  }

    // this.observable.subscribe((param:number)  => {
    //   console.log('subscribe 1, ', param);
    // });

    // this.promise.then((param:string)  => {
    //   console.log(param);
    // })


  ngOnDestroy() {
    this.subscribption?.unsubscribe();
    this.subscribption2?.unsubscribe();
  }

  // public scrollTo(target: HTMLElement): void {
  //   target.scrollIntoView({behavior: 'smooth'});
  // }

  test(popup: TemplateRef<ElementRef>) {
    // this.modalService.open(popup, {})

    this.subscribption2 = this.subject
      .pipe(
        map((number: number) => {
          return 'Число: ' + number;
        })
      )
      .subscribe((param: string) => {
      console.log('subscribe 2, ', param);
    });
  }



}
