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
import { BrandsComponent } from './Components/Pages/brands/brands.component';
import { CartComponent } from './Components/Pages/cart/cart.component';
import { CheckoutsComponent } from './Components/Pages/checkouts/checkouts.component';
import { OrdersComponent } from './Components/Pages/orders/orders.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ProductDashComponent } from './Components/Pages/product-dash/product-dash.component';
import { OrderDetailComponent } from './Components/Pages/order-detail/order-detail.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



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
  BrandsComponent,
  CartComponent,
  CheckoutsComponent,
  OrdersComponent,
]
@NgModule({
  declarations: [
    AppComponent,
    pageComponents,
    ProductDashComponent,
    OrderDetailComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgToastModule,
    FormsModule,
    NgxSpinnerModule.forRoot({ type: 'ball-scale-multiple' }),
    NgxChartsModule,
    BrowserAnimationsModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
