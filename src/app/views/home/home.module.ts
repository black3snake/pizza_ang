import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import {AboutComponent} from "./about/about.component";
import {MainComponent} from "./main/main.component";


@NgModule({
  declarations: [
    AboutComponent,
    MainComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
