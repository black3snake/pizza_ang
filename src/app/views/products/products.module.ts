import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProductsRoutingModule} from './products-routing.module';
import {ProductsComponent} from "./products/products.component";
import {ProductComponent} from "./product/product.component";
import {WordUpperPipe} from "../../pipes/word-upper.pipe";
import {AbbreviationPipe} from "../../pipes/abbreviation.pipe";
import {FormsModule} from "@angular/forms";
import {ProductCardComponent} from "../../shared/components/product-card/product-card.component";
import {TitleComponent} from "../../shared/components/title/title.component";
import {RatingComponent} from "../../shared/components/rating/rating.component";


@NgModule({
    declarations: [
        ProductsComponent,
        ProductComponent,
        ProductCardComponent,
        TitleComponent,
        WordUpperPipe,
        RatingComponent,
        AbbreviationPipe,
    ],
    imports: [
        CommonModule,
        FormsModule,
        ProductsRoutingModule
    ]
})
export class ProductsModule {
}
