import { Injectable } from '@angular/core';
import {ProductType} from "../types/product.type";

@Injectable()
export class ProductService {

  constructor() { }

  getProducts(): ProductType[] {
    // ajax
    return [
      {
        image: 'myaso.png',
        imageAlt: 'мясная пицца',
        title: 'Мясная Делюкс',
        description: 'Пепперони, лук, бекон, томатная паста, колбаски, перец, грибы, соус чили, ананасы',
        datetime: new Date().toString(),
      },
      {
        image: 'morskaya.png',
        imageAlt: 'морская пицца',
        title: 'Морская Премиум',
        description: 'Перец, сыр, креветки, кальмары, мидии, лосось',
        datetime: '2025-07-14 17:14:00',
      },
      {
        image: '',//'bekon.png',
        // image: 'bekon.png',
        imageAlt: 'Бекон и Сосиски',
        title: 'Бекон и Сосиски',
        description: 'Бекон, сыр, сосиски, ананас, томатная паста',
        datetime: '2025-07-14 17:14:00',
      },
      {
        image: 'kurica.png',
        imageAlt: 'Куриная Делюкс',
        title: 'Куриная Делюкс',
        description: 'Курица, ананас, сыр Пепперони, соус для пиццы, томатная паста',
        datetime: '2025-07-14 17:14:00',
      },
      {
        image: 'barbuku.png',
        imageAlt: 'Барбекю Премиум',
        title: 'Барбекю Премиум',
        description: 'Свинина BBQ, соус Барбкею, сыр, курица, соус для пиццы, соус чили',
        datetime: '2025-04-14 12:14:00',
      },
      {
        image: 'pepper.png',
        imageAlt: 'Пепперони Дабл',
        title: 'Пепперони Дабл',
        description: 'Пепперони, сыр, колбаса 2 видов: обжаренная и вареная',
        datetime: '2025-07-14 17:14:00',
      },
      {
        image: 'kur_trio.png',
        imageAlt: 'Куриное трио',
        title: 'Куриное трио',
        description: 'Жареная курица, Тушеная курица, Куриные наггетсы, перец, сыр, грибы, соус для пиццы',
        datetime: '2025-05-14 07:14:00',
      },
      {
        image: 'cheese.png',
        imageAlt: 'Сырная',
        title: 'Сырная',
        description: 'Сыр Джюгас, Сыр с плесенью, Сыр Моцарелла, Сыр секретный',
        datetime: '2025-07-14 17:14:00',
      },
    ]
  }
}
