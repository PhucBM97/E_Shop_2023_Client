import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrPageComponent } from './Components/Pages/err-page/err-page.component';
import { ShopPageComponent } from './Components/Pages/shop-page/shop-page.component';
import { FileuploadComponent } from './Components/fileupload/fileupload.component';
import { LoginComponent } from './Components/Auth/login/login.component';
import { SignupComponent } from './Components/Auth/signup/signup.component';
import { authGuard } from './Guard/auth.guard';
import { DashboardComponent } from './Components/Pages/dashboard/dashboard.component';
import { ResetPasswordComponent } from './Components/Auth/reset-password/reset-password.component';
import { adminGuard } from './Guard/admin.guard';
import { AdidasComponent } from './Components/Pages/adidas/adidas.component';
import { NikeComponent } from './Components/Pages/nike/nike.component';
import { NewBalanceComponent } from './Components/Pages/new-balance/new-balance.component';
import { ConverseComponent } from './Components/Pages/converse/converse.component';
import { PumaComponent } from './Components/Pages/puma/puma.component';
import { ListProductsComponent } from './Components/list-products/list-products.component';
import { ProductDetailComponent } from './Components/Pages/product-detail/product-detail.component';

const routes: Routes = [

  {path: '', redirectTo: '/login', pathMatch: 'full'},
  { 
    path: 'login',
    component: LoginComponent,
  },
  { 
    path: 'shop',
    component: ShopPageComponent,
    pathMatch: "full"
  },
  {
    path: 'adidas',
    component: AdidasComponent,
  },
  {
    path: 'nike',
    component: NikeComponent,
  },
  {
    path: 'newbalance',
    component: NewBalanceComponent,
  },
  {
    path: 'converse',
    component: ConverseComponent,
  },
  {
    path: 'puma',
    component: PumaComponent,
  },
  {
    path: 'err123',
    component: ErrPageComponent,
  },
  { 
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [adminGuard]
  },
  {
    path: 'aaa',
    component: ListProductsComponent
  },
  {
    path: 'file',
    component: FileuploadComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'reset',
    component: ResetPasswordComponent
  },
  {
    path: 'shop/:id',
    component: ProductDetailComponent
  },







  
  {
    path: '**',
    component: ErrPageComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing: true}),],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const ArrayOfComponents = [

]
