import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './Components/home-page/home-page.component';
import { ErrPageComponent } from './Components/err-page/err-page.component';
import { ListProductsComponent } from './Components/list-products/list-products.component';
import { ShopPageComponent } from './Components/shop-page/shop-page.component';
import { FileuploadComponent } from './Components/fileupload/fileupload.component';
import { LoginComponent } from './Components/login/login.component';
import { SignupComponent } from './Components/signup/signup.component';
import { authGuard } from './Guard/auth.guard';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { ResetPasswordComponent } from './Components/reset-password/reset-password.component';
import { adminGuard } from './Guard/admin.guard';

const routes: Routes = [
  { 
    path: '',
    component: LoginComponent
  },
  { 
    path: 'home',
    component: HomePageComponent,
    canActivate: [authGuard]
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
    path: 'shop',
    component: ShopPageComponent
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
    path: '**',
    component: ErrPageComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes),],
  exports: [RouterModule]
})
export class AppRoutingModule { }
