import { Component, OnInit } from '@angular/core';
import {ProductType} from "../../../types/product.type";
import {ProductService} from "../../../services/product.service";
import {CartService} from "../../../services/cart.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  public products: ProductType[] = [];



  constructor(private productService: ProductService, private cartService: CartService, private router: Router) { }

  ngOnInit(): void {
    this.products = this.productService.getProducts();
  }

  public addToCart(title: string): void {
    // this.scrollTo(target);
    // this.formValues.productTitle = title;
    // this.cartService.count++;
    // this.products = this.products.filter(item => item.title.toUpperCase() !== title.toUpperCase());

    // this.cartService.product = title;
    this.router.navigate(['/order'], {queryParams: {product: title}});
  }
}
