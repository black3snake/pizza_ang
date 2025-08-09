import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {map, Observable, retry, tap} from "rxjs";
import {Router} from "@angular/router";
import {ProductType} from "../../../types/product.type";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  // private products: ProductType[] = [
  //   {
  //     id: 1,
  //     image: 'myaso.png',
  //     imageAlt: 'мясная пицца',
  //     title: 'Мясная Делюкс',
  //     description: 'Пепперони, лук, бекон, томатная паста, колбаски, перец, грибы, соус чили, ананасы',
  //     datetime: new Date().toString(),
  //   },
  //   {
  //     id: 2,
  //     image: 'morskaya.png',
  //     imageAlt: 'морская пицца',
  //     title: 'Морская Премиум',
  //     description: 'Перец, сыр, креветки, кальмары, мидии, лосось',
  //     datetime: '2025-07-14 17:14:00',
  //   },
  //   {
  //     id: 3,
  //     image: '',//'bekon.png',
  //     // image: 'bekon.png',
  //     imageAlt: 'Бекон и Сосиски',
  //     title: 'Бекон и Сосиски',
  //     description: 'Бекон, сыр, сосиски, ананас, томатная паста',
  //     datetime: '2025-07-14 17:14:00',
  //   },
  //   {
  //     id: 4,
  //     image: 'kurica.png',
  //     imageAlt: 'Куриная Делюкс',
  //     title: 'Куриная Делюкс',
  //     description: 'Курица, ананас, сыр Пепперони, соус для пиццы, томатная паста',
  //     datetime: '2025-07-14 17:14:00',
  //   },
  //   {
  //     id: 5,
  //     image: 'barbuku.png',
  //     imageAlt: 'Барбекю Премиум',
  //     title: 'Барбекю Премиум',
  //     description: 'Свинина BBQ, соус Барбкею, сыр, курица, соус для пиццы, соус чили',
  //     datetime: '2025-04-14 12:14:00',
  //   },
  //   {
  //     id: 6,
  //     image: 'pepper.png',
  //     imageAlt: 'Пепперони Дабл',
  //     title: 'Пепперони Дабл',
  //     description: 'Пепперони, сыр, колбаса 2 видов: обжаренная и вареная',
  //     datetime: '2025-07-14 17:14:00',
  //   },
  //   {
  //     id: 7,
  //     image: 'kur_trio.png',
  //     imageAlt: 'Куриное трио',
  //     title: 'Куриное трио',
  //     description: 'Жареная курица, Тушеная курица, Куриные наггетсы, перец, сыр, грибы, соус для пиццы',
  //     datetime: '2025-05-14 07:14:00',
  //   },
  //   {
  //     id: 8,
  //     image: 'cheese.png',
  //     imageAlt: 'Сырная',
  //     title: 'Сырная',
  //     description: 'Сыр Джюгас, Сыр с плесенью, Сыр Моцарелла, Сыр секретный',
  //     datetime: '2025-07-14 17:14:00',
  //   },
  // ];
  private products: ProductType[] = [];
  private product: ProductType | undefined;

  constructor(private http: HttpClient, private router: Router) {
    this.product = {
      id: 0,
      image: '',
      imageAlt: '',
      title: '',
      description: '',
      datetime: ''
    }
  }

  getProducts(): Observable<ProductType[]> {
    return this.http.get<ProductType[]>('https://testologia.ru/pizzas')
  }

  getProduct2(id: number): ProductType | undefined {
    // ajax
    // return this.products.find(product => (product.id === id));
    this.getProducts().subscribe({
      next: (data) => {
        this.product = data.find(product => (product.id === id));
      },
      error: (error: string) => {
        console.log('Error!!!, ', error)
        this.router.navigate(['/']);
      }
    })
    return this.product;
  }

  getProduct(id: number): Observable<ProductType> {
    return this.http.get<ProductType>(`https://testologia.ru/pizzas?id=${id}`);
  }

  createOrder(data: {product: string, address: string, phone: string}) {
    return this.http.post<{success: boolean, message?: string}>('https://testologia.ru/order-pizza', data);
  }
}
