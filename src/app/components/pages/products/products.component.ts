import {Component, OnDestroy, OnInit} from '@angular/core';
import {ProductType} from "../../../types/product.type";
import {ProductService} from "../../../services/product.service";
import {CartService} from "../../../services/cart.service";
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {catchError, map, of, retry, Subscription, tap, throwError} from "rxjs";


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit, OnDestroy {
  public products: ProductType[] = [];
  loading: boolean = false;
  private subscribption: Subscription | null = null;

  constructor(private productService: ProductService, private http: HttpClient,
              // private cartService: CartService,
              private router: Router
  ) {
  }

  ngOnInit(): void {
    this.loading = true;
    this.subscribption = this.productService.getProducts()
      .pipe(
        tap( () => {
          this.loading = false;
        })
      )
      .subscribe({
      next: (data) => {
        this.products = data;
        // console.log(this.products);
      },
      error: (error: string) => {
        console.log('Error!!!, ', error)
        this.router.navigate(['/']);
      }
    })


      // this.products = this.productService.getProducts();

      // this.http.get<{ data: ProductType[] }>('https://testologiaa.ru/pizzas?extraField=1')
      // .pipe(
      //   tap((result) => {
      //     console.log(result);
      //   }),
      //   map(result => result.data),
      //   // catchError(error => {
      //   //   // throw new Error('OPA');
      //   //   return of([]);
      //   // }),
      //   retry(3)
      // )
      // .subscribe(
      //   {
      //     next: (data) => {
      //       this.products = data;
      //       console.log(this.products);
      //     },
      //     error: (error: string) => {
      //       console.log('Error!!!, ', error)
      //       this.router.navigate(['/']);
      //     }
      //   })

  }

  ngOnDestroy(): void {
    this.subscribption?.unsubscribe();
  }

  // public addToCart(title: string): void {
  //   // this.scrollTo(target);
  //   // this.formValues.productTitle = title;
  //   // this.cartService.count++;
  //   // this.products = this.products.filter(item => item.title.toUpperCase() !== title.toUpperCase());
  //
  //   // this.cartService.product-card = title;
  //   this.router.navigate(['/order'], {queryParams: {product-card: title}});
  // }
}
