import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import {AboutComponent} from "./about/about.component";
import {MainComponent} from "./main/main.component";
import {SharedModule} from "../../shared/shared.module";
import {RouterModule} from "@angular/router";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";


@NgModule({
  declarations: [
    AboutComponent,
    MainComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    NgbModule,
    HomeRoutingModule
  ],
  exports: [
    HomeRoutingModule,
  ]
})
export class HomeModule { }
