import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Subscription} from "rxjs";
import {ProductService} from "../../../shared/services/product.service";
import {ProductType} from "../../../../types/product.type";



@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit, OnDestroy {
  private subscribption: Subscription | null = null;
  product: ProductType;
  constructor(private activatedRoute: ActivatedRoute, private productService: ProductService, private router: Router) {
    this.product = {
      id: 0,
      image: '',
      imageAlt: '',
      title: '',
      description: '',
      datetime: '',
    }
  }

  ngOnInit(): void {
    this.subscribption = this.activatedRoute.params.subscribe(params => {
      if (params['id']) {
       this.productService.getProduct(+params['id'])
        .subscribe({
          next: (data) => {
            this.product = data;
          },
          error: (error: string) => {
            console.log('Error!!! in product, ', error)
            this.router.navigate(['/']);
          }
        })
      }
    })
  }

  ngOnDestroy(): void {
    this.subscribption?.unsubscribe();
  }

}
