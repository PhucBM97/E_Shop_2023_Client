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
import { BrandsComponent } from './Components/Pages/brands/brands.component';
import { ListProductsComponent } from './Components/list-products/list-products.component';
import { ProductDetailComponent } from './Components/Pages/product-detail/product-detail.component';
import { CartComponent } from './Components/Pages/cart/cart.component';
import { CheckoutsComponent } from './Components/Pages/checkouts/checkouts.component';
import { OrdersComponent } from './Components/Pages/orders/orders.component';
import { ProductDashComponent } from './Components/Pages/product-dash/product-dash.component';

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
    path: 'brands/:brandName',
    component: BrandsComponent,
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
    path: 'cart',
    component: CartComponent
  },
  {
    path: 'checkouts',
    component: CheckoutsComponent
  },
  {
    path: 'dashboard/orders',
    component: OrdersComponent
  },
  {
    path: 'dashboard/products',
    component: ProductDashComponent
  },








  
  {
    path: '**',
    component: ErrPageComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing: true, scrollPositionRestoration: 'enabled',}),],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const ArrayOfComponents = [

]
