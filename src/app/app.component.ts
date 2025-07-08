import { Component } from '@angular/core';
import {ProductType} from "./types/product.type";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public products: ProductType[] = [
    {
      image: 'myaso.png',
      imageAlt: 'мясная пицца',
      title: 'Мясная Делюкс',
      description: 'Пепперони, лук, бекон, томатная паста, колбаски, перец, грибы, соус чили, ананасы',
    },
    {
      image: 'morskaya.png',
      imageAlt: 'морская пицца',
      title: 'Морская Премиум',
      description: 'Перец, сыр, креветки, кальмары, мидии, лосось',
    },
    {
      image: 'bekon.png',
      imageAlt: 'Бекон и Сосиски',
      title: 'Бекон и Сосиски',
      description: 'Бекон, сыр, сосиски, ананас, томатная паста',
    },
    {
      image: 'kurica.png',
      imageAlt: 'Куриная Делюкс',
      title: 'Куриная Делюкс',
      description: 'Курица, ананас, сыр Пепперони, соус для пиццы, томатная паста',
    },
    {
      image: 'barbuku.png',
      imageAlt: 'Барбекю Премиум',
      title: 'Барбекю Премиум',
      description: 'Свинина BBQ, соус Барбкею, сыр, курица, соус для пиццы, соус чили',
    },
    {
      image: 'pepper.png',
      imageAlt: 'Пепперони Дабл',
      title: 'Пепперони Дабл',
      description: 'Пепперони, сыр, колбаса 2 видов: обжаренная и вареная',
    },
    {
      image: 'kur_trio.png',
      imageAlt: 'Куриное трио',
      title: 'Куриное трио',
      description: 'Жареная курица, Тушеная курица, Куриные наггетсы, перец, сыр, грибы, соус для пиццы',
    },
    {
      image: 'cheese.png',
      imageAlt: 'Сырная',
      title: 'Сырная',
      description: 'Сыр Джюгас, Сыр с плесенью, Сыр Моцарелла, Сыр секретный',
    },
  ]

  public formValues = {
    productTitle: '',
    address: '',
    phone: '',
  }

  public scrollTo(target: HTMLElement): void {
    target.scrollIntoView({behavior: 'smooth'});
  }

  public addToCart(product: ProductType, target: HTMLElement): void {
    this.scrollTo(target);
    this.formValues.productTitle = product.title;
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
