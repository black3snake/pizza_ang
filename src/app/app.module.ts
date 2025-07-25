import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import {HeaderComponent} from "./components/common/header/header.component";
import { FooterComponent } from './components/common/footer/footer.component';
import { ProductComponent } from './components/common/product/product.component';
import { TitleComponent } from './components/common/title/title.component';
import { RatingComponent } from './components/common/rating/rating.component';
import { CoolInputDirective } from './directives/cool-input.directive';
import { IsChickenDirective } from './directives/is-chicken.directive';
import { IsAutoBgColorDirective } from './directives/is-auto-bg-color.directive';
import { ChickenDescriptionPipe } from './pipes/chicken-description.pipe';
import { WordUpperPipe } from './pipes/word-upper.pipe';
import { ChickenProductsPipe } from './pipes/chicken-products.pipe';
import { AbbreviationPipe } from './pipes/abbreviation.pipe';
import {ProductService} from "./services/product.service";
import { MainComponent } from './components/pages/main/main.component';
import { AboutComponent } from './components/pages/about/about.component';
import { ProductsComponent } from './components/pages/products/products.component';
import { OrderComponent } from './components/pages/order/order.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ProductComponent,
    TitleComponent,
    RatingComponent,
    CoolInputDirective,
    IsChickenDirective,
    IsAutoBgColorDirective,
    ChickenDescriptionPipe,
    WordUpperPipe,
    ChickenProductsPipe,
    AbbreviationPipe,
    MainComponent,
    AboutComponent,
    ProductsComponent,
    OrderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
