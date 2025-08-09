import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import { IsChickenDirective } from './directives/is-chicken.directive';
import { IsAutoBgColorDirective } from './directives/is-auto-bg-color.directive';
import { ChickenDescriptionPipe } from './pipes/chicken-description.pipe';
import { ChickenProductsPipe } from './pipes/chicken-products.pipe';
import {ProductService} from "./services/product.service";
import { YearDirective } from './directives/year.directive';
import {HttpClientModule} from "@angular/common/http";
import {CoreModule} from "./core/core.module";
import {ProductsModule} from "./views/products/products.module";
import {HomeModule} from "./views/home/home.module";
import {OrderModule} from "./views/order/order.module";
import {HeaderComponent} from "./shared/components/header/header.component";
import {FooterComponent} from "./shared/components/footer/footer.component";
import {TimerComponent} from "./shared/components/timer/timer.component";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    IsChickenDirective,
    IsAutoBgColorDirective,
    ChickenDescriptionPipe,
    ChickenProductsPipe,
    YearDirective,
    TimerComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ProductsModule,
    CoreModule,
    HomeModule,
    OrderModule,
    AppRoutingModule,
  ],
  providers: [
    ProductService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
