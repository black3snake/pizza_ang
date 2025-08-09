import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: '',
    children: [
      {path: '', loadChildren: () => import('./views/home/home.module').then(m => m.HomeModule) },
    ]
  },

  {path: '**', redirectTo: ''},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {anchorScrolling: "enabled", useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
