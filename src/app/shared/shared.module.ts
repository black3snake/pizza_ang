import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProductCardComponent} from "./components/product-card/product-card.component";
import {RatingComponent} from "./components/rating/rating.component";
import {TimerComponent} from "./components/timer/timer.component";
import {TitleComponent} from "./components/title/title.component";
import {IsChickenDirective} from "./directives/is-chicken.directive";
import {IsAutoBgColorDirective} from "./directives/is-auto-bg-color.directive";
import {ChickenDescriptionPipe} from "./pipes/chicken-description.pipe";
import {ChickenProductsPipe} from "./pipes/chicken-products.pipe";
import {YearDirective} from "./directives/year.directive";
import {WordUpperPipe} from "./pipes/word-upper.pipe";
import {AbbreviationPipe} from "./pipes/abbreviation.pipe";
import {FormsModule} from "@angular/forms";
import {CoolInputDirective} from "./directives/cool-input.directive";
import {RouterModule} from "@angular/router";
import { PopupComponent } from './components/popup/popup.component';


@NgModule({
  declarations: [
    ProductCardComponent,
    RatingComponent,
    TimerComponent,
    TitleComponent,
    IsChickenDirective,
    IsAutoBgColorDirective,
    ChickenDescriptionPipe,
    ChickenProductsPipe,
    YearDirective,
    WordUpperPipe,
    AbbreviationPipe,
    CoolInputDirective,
    PopupComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
  ],
  exports: [
    ProductCardComponent,
    RatingComponent,
    TimerComponent,
    TitleComponent,
    IsChickenDirective,
    IsAutoBgColorDirective,
    ChickenDescriptionPipe,
    ChickenProductsPipe,
    YearDirective,
    WordUpperPipe,
    AbbreviationPipe,
    CoolInputDirective,
    PopupComponent,
  ]
})
export class SharedModule { }
