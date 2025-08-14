import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderRoutingModule } from './order-routing.module';
import {OrderComponent} from "./order.component";
import {FormsModule} from "@angular/forms";
import {SharedModule} from "../../shared/shared.module";
import {RouterModule} from "@angular/router";
import {InputTextModule} from "primeng/inputtext";
import {TuiButtonModule} from "@taiga-ui/core";


@NgModule({
  declarations: [
    OrderComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    RouterModule,
    OrderRoutingModule,
    InputTextModule,
    TuiButtonModule
  ],
  exports: [
    OrderRoutingModule
  ]
})
export class OrderModule { }
