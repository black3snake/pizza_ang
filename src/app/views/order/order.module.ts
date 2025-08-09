import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderRoutingModule } from './order-routing.module';
import {OrderComponent} from "./order.component";
import {FormsModule} from "@angular/forms";
import {CoolInputDirective} from "../../directives/cool-input.directive";


@NgModule({
  declarations: [
    OrderComponent,
    CoolInputDirective,
  ],
  imports: [
    CommonModule,
    FormsModule,
    OrderRoutingModule
  ]
})
export class OrderModule { }
