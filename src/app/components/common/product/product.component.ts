import { Component, ElementRef, EventEmitter, Input, Output, ViewChild} from '@angular/core';
import {ProductType} from "src/app/types/product.type";
import {TitleComponent} from "../title/title.component";
import {CartProductService} from "src/app/services/cart-product.service";

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  // encapsulation: ViewEncapsulation.None
  providers: [CartProductService],
})
// export class ProductComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
export class ProductComponent {

  // @Input() product: ProductType = {} as ProductType;
  @Input() product: ProductType;
  // get product(): ProductType { return this._product}
  // set product(param: ProductType) {
  //   param.title = param.title.toUpperCase();
  //   this._product = param;
  // }

  // private _product: ProductType;

  @Output() addToCartEvent: EventEmitter<string> = new EventEmitter<string>();

  @ViewChild(TitleComponent)
  private _titleComponent!: TitleComponent;

  @ViewChild('elem')
  private _elem!: ElementRef;

  rating: number = 0;

  constructor(public cartProductService: CartProductService) {
    this.product = {
      image: '',
      imageAlt: '',
      title: '',
      description: '',
      datetime: '',
    }
  }

  // ngOnChanges(changes: SimpleChanges) {
  //   // console.log('ngOnChanges', changes);
  // }
  //
  // ngOnInit(): void {
  //   // console.log('ngOnInit');
  // }
  //
  // ngDoCheck(): void {
  //   // console.log('ngDoCheck');
  // }
  //
  // ngAfterContentInit(): void {
  //   // console.log('ngAfterContentInit');
  // }
  //
  // ngAfterContentChecked(): void {
  //   // console.log('ngAfterContentChecked');
  // }
  //
  // ngAfterViewInit() {
  //   // console.log('ngAfterViewInit');
  //   // console.log(this._elem);
  // }
  // ngAfterViewChecked(): void {
  //   // console.log('ngAfterViewChecked');
  // }
  //
  // ngOnDestroy() {
  //   // console.log('ngOnDestroy');
  // }

  addProductToCart() {
    this.cartProductService.count++;
    this.addToCartEvent.emit(this._titleComponent.toUpper())

  }

}
