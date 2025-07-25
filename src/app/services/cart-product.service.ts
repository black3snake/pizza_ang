import { Injectable } from '@angular/core';

@Injectable()
export class CartProductService {
  count: number = 0;
  constructor() { }

  // getCommonCount() {
  //   return this.count + '/' + this.cartService.count;
  // }
}
