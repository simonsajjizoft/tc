import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // {
  //   path: '',
  //   redirectTo: 'login',
  //   pathMatch: 'full'
  // },
  {
    path: '',
    children: [
      { path: '', loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule) },      
      { path: 'packages', loadChildren: () => import('./modules/packages/packages.module').then(m => m.PackagesModule) },
    ]
  },
  { path: '**', redirectTo: '',pathMatch:'full'}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
