import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss']
})
export class RatingComponent implements OnInit, OnChanges {

  private _rating: number;
  public isRating: boolean;
  public valueRating: number;

  @Input()
  get rating(): number { return this._rating; }
  set rating(value: number) {
    if(value < 0 || value > 5) {
      this.isRating = false;
    } else {
      this._rating = value;
      this.isRating = true;
    }
  }

  constructor() {
    this._rating = 0;
    this.isRating = false;
    this.valueRating = 0;
  }

  ngOnChanges(changes: SimpleChanges) {
      // if (changes._rating ) {}
    // console.log('ngOnChanges', changes);
    if (this._rating) {
      this.valueRating = this._rating;
    }
  }

  ngOnInit(): void {
  }

}
