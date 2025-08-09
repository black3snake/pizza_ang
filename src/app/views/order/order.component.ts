import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Subscription} from "rxjs";
import {CartService} from "../../services/cart.service";
import {ProductService} from "../../services/product.service";

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit, OnDestroy {

  public formValues = {
    productTitle: '',
    address: '',
    phone: '',
  }

  constructor(private cartService: CartService, private activatedRoute: ActivatedRoute,
              private productService: ProductService,
              private router: Router
  ) {
  }

  private subscribption: Subscription | null = null;
  private subscribptionOrder: Subscription | null = null;

  ngOnInit(): void {
    // if (this.cartService.product-card) {
    //   this.formValues.productTitle = this.cartService.product-card;
    ////}

    // const productParam = this.activatedRoute.snapshot.queryParamMap.get('product');
    // if (productParam) {
    //   this.formValues.productTitle = productParam;
    // }

    this.subscribption = this.activatedRoute.queryParams.subscribe(params => {
      if (params['product']) {
        this.formValues.productTitle = params['product'];
      }
    })
  }

  // test() {
  //   if (this.subscribption) {
  //     this.subscribption.unsubscribe();
  //   }
  // }

  public createOrder() {

    if (!this.formValues.productTitle) {
      alert('Заполните пиццу');
      return;
    }
    if (!this.formValues.address) {
      alert('Заполните адрес');
      return;
    }
    if (!this.formValues.phone) {
      alert('Заполните телефон');
      return;
    }

    // ajax запрос
    this.subscribptionOrder = this.productService.createOrder({
      product: this.formValues.productTitle,
      address: this.formValues.address,
      phone: this.formValues.phone,
    })
      // .subscribe( response => {
      // if(response.success && !response.message){
      //   alert('Спасибо за заказ')
      //
      //   this.formValues = {
      //     productTitle: '',
      //     address: '',
      //     phone: '',
      //   }
      // } else {
      //   alert('Ошибка..')
      // }
      .subscribe({
        next: (response) => {
          if (response.success && !response.message) {
            alert('Спасибо за заказ')
            this.formValues = {
              productTitle: '',
              address: '',
              phone: '',
            }
          }
        },
        error: (error: string) => {
          console.log('Error!!! in order, ', error)
          this.router.navigate(['/']);
        }
      });


  }

  ngOnDestroy(): void {
    this.subscribption?.unsubscribe();
    this.subscribptionOrder?.unsubscribe();
  }

}
