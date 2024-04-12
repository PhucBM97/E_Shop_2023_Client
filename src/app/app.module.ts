import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './Components/Pages/home-page/home-page.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ErrPageComponent } from './Components/Pages/err-page/err-page.component';
import { ListProductsComponent } from './Components/list-products/list-products.component';
import { ShopPageComponent } from './Components/Pages/shop-page/shop-page.component';
import { HeaderComponent } from './Components/Layouts/header/header.component';
import { FooterComponent } from './Components/Layouts/footer/footer.component';
import { LoaderSpinnerComponent } from './Components/loader-spinner/loader-spinner.component';
import { ProductDetailComponent } from './Components/Pages/product-detail/product-detail.component';
import { FileuploadComponent } from './Components/fileupload/fileupload.component';
import { LoginComponent } from './Components/Auth/login/login.component';
import { SignupComponent } from './Components/Auth/signup/signup.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgToastModule } from 'ng-angular-popup';
import { DashboardComponent } from './Components/Pages/dashboard/dashboard.component';
import { TokenInterceptor } from './Interceptors/token.interceptor';
import { FormsModule } from '@angular/forms';
import { ResetPasswordComponent } from './Components/Auth/reset-password/reset-password.component';
import { AdidasComponent } from './Components/Pages/adidas/adidas.component';
import { NikeComponent } from './Components/Pages/nike/nike.component';
import { NewBalanceComponent } from './Components/Pages/new-balance/new-balance.component';
import { ConverseComponent } from './Components/Pages/converse/converse.component';
import { PumaComponent } from './Components/Pages/puma/puma.component';
import { CartComponent } from './Components/Pages/cart/cart.component';
import { CheckoutsComponent } from './Components/Pages/checkouts/checkouts.component';
import { OrdersComponent } from './Components/Pages/orders/orders.component';
import { NgxSpinnerModule } from 'ngx-spinner';



const pageComponents = [
  HomePageComponent,
  ErrPageComponent,
  ListProductsComponent,
  ShopPageComponent,
  HeaderComponent,
  FooterComponent,
  LoaderSpinnerComponent,
  ProductDetailComponent,
  FileuploadComponent,
  LoginComponent,
  SignupComponent,
  DashboardComponent,
  ResetPasswordComponent,
  AdidasComponent,
  NikeComponent,
  NewBalanceComponent,
  ConverseComponent,
  PumaComponent,
  CartComponent,
  CheckoutsComponent,
  OrdersComponent,
]
@NgModule({
  declarations: [
    AppComponent,
    pageComponents,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgToastModule,
    FormsModule,
    NgxSpinnerModule.forRoot({ type: 'ball-scale-multiple' })
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
