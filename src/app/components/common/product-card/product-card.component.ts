import { Component, ElementRef, EventEmitter, Input, Output, ViewChild} from '@angular/core';
import {ProductType} from "src/app/types/product.type";
import {TitleComponent} from "../title/title.component";
import {CartProductService} from "src/app/services/cart-product.service";

@Component({
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
  // encapsulation: ViewEncapsulation.None
  providers: [CartProductService],
})
// export class ProductComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
export class ProductCardComponent {

  // @Input() product-card: ProductType = {} as ProductType;
  @Input() product: ProductType;
  // get product-card(): ProductType { return this._product}
  // set product-card(param: ProductType) {
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
      id: 0,
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

  // addProductToCart() {
  //   this.cartProductService.count++;
  //   this.addToCartEvent.emit(this._titleComponent.toUpper())
  // }

}
