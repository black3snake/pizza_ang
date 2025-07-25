import {Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[coolInput]'
})
export class CoolInputDirective implements OnInit {

  @Input() coolInputDefaultBgColor: string = 'white';
  @Input() coolInputFocusBgColor: string = 'orange';

  constructor(private el: ElementRef, private renderer: Renderer2) {
  }

  private _backgroundColor: string = '';
  @HostBinding('style.backgroundColor')
  get getBgColor() {
    return this._backgroundColor;
  }

  private _isOnFocus: boolean = false;
  @HostBinding('class.isOnFocus')
  get getIsOnFocus() {
    return this._isOnFocus;
  }

  @HostListener('focus')
  onFocus(): void {
    // this.renderer.setStyle(this.el.nativeElement, 'background-color', 'orange');
    this.changeElementBgColor(this.coolInputFocusBgColor);
    this._isOnFocus = true;
  }
  @HostListener('blur')
  onBlur(): void {
    this.changeElementBgColor(this.coolInputDefaultBgColor);
    this._isOnFocus = false;
  }

  @HostListener('click', ['$event', '$event.target'])
  onClick(event: Event, target: HTMLElement): void {
    console.log(target);
    console.log(event);
  }

  ngOnInit() {
    // console.log(this.el.nativeElement)
    // this.el.nativeElement.style.backgroundColor = 'yellow';
    this.changeElementBgColor(this.coolInputDefaultBgColor);
    // this.renderer.setStyle(this.el.nativeElement, 'background-color', 'white');
    this.renderer.setAttribute(this.el.nativeElement, 'placeholder', this.el.nativeElement.getAttribute('placeholder') + '*');

    // const text = this.renderer.createElement('span');
    // this.renderer.setProperty(text, 'innerText', '*Обязательно для заполнения');
    // this.renderer.setStyle(text, 'color', 'red');
    // this.renderer.insertBefore(this.el.nativeElement.parentElement, text, this.renderer.nextSibling(this.el.nativeElement));
    // this.renderer.insertBefore(this.el.nativeElement.parentElement, text, this.el.nativeElement.nextElementSibling);
  }

  changeElementBgColor(color: string): void {
    this._backgroundColor = color;
    // this.renderer.setStyle(this.el.nativeElement, 'background-color', color);
  }
}
