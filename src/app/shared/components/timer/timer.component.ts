import {Component, OnDestroy, OnInit} from '@angular/core';
import {DatePipe} from "@angular/common";
import {map, Subscription, timer} from "rxjs";

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit, OnDestroy {
  public timerString: string = '';
  private readonly datePipe = new DatePipe('ru-RU'); // По умолчанию русская локаль
  private subscription!: Subscription;

  constructor() { }

  ngOnInit(): void {
    // setInterval(() => {
    //   this.timerUI();
    // }, 5000)
    this.subscription = timer(0, 5000)
      .pipe(
        map(()=> new Date()),
        map(date => this.timerUI(date))
      ).subscribe(time => {
        this.timerString = time;
      })

  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  timerUI(date: Date) {
    // this.timerString = new Date().toLocaleString();
    this.timerString = this.datePipe.transform(date, 'dd MMMM YYYY, HH:mm:ss') || '';
    return this.timerString;
  }

}
