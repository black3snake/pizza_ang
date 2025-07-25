import { Component, OnInit } from '@angular/core';
import {ProductType} from "../../../types/product.type";
import {ProductService} from "../../../services/product.service";
import {CartService} from "../../../services/cart.service";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  public products: ProductType[] = [];

  public formValues = {
    productTitle: '',
    address: '',
    phone: '',
  }


  constructor(private productService: ProductService, public cartService: CartService) {
  }

  ngOnInit() {
    this.products = this.productService.getProducts();
  }

  public scrollTo(target: HTMLElement): void {
    target.scrollIntoView({behavior: 'smooth'});
  }

  public addToCart(title: string, target: HTMLElement): void {
    this.scrollTo(target);
    this.formValues.productTitle = title;
    this.cartService.count++;
    // this.products = this.products.filter(item => item.title.toUpperCase() !== title.toUpperCase());
  }

  public createOrder() {

    if(!this.formValues.productTitle) {
      alert('Заполните пиццу');
      return;
    }
    if(!this.formValues.address) {
      alert('Заполните адрес');
      return;
    }
    if(!this.formValues.phone) {
      alert('Заполните телефон');
      return;
    }

    // ajax запрос
    alert('Спасибо за заказ')

    this.formValues = {
      productTitle: '',
      address: '',
      phone: '',
    }
  }

}
