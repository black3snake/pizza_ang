import {Directive, ElementRef, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';

@Directive({
  selector: '[appYear]'
})
export class YearDirective implements OnInit, OnChanges {

  @Input('appYear') year: number | string = '';

  constructor(private el: ElementRef) {
  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    if ('year' in changes) {
      this.el.nativeElement.textContent = this.year?.toString() ?? '';
    }
  }


}
