import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './Components/home-page/home-page.component';
import { HttpClientModule } from '@angular/common/http';
import { ErrPageComponent } from './Components/err-page/err-page.component';
import { ListProductsComponent } from './Components/list-products/list-products.component';
import { ShopPageComponent } from './Components/shop-page/shop-page.component';
import { LayoutComponent } from './Components/layout/layout.component';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { LoaderSpinnerComponent } from './Components/loader-spinner/loader-spinner.component';
import { ProductDetailComponent } from './Components/product-detail/product-detail.component';
import { FileuploadComponent } from './Components/fileupload/fileupload.component';
import { LoginComponent } from './Components/login/login.component';
import { SignupComponent } from './Components/signup/signup.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgToastModule } from 'ng-angular-popup';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ErrPageComponent,
    ListProductsComponent,
    ShopPageComponent,
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
    LoaderSpinnerComponent,
    ProductDetailComponent,
    FileuploadComponent,
    LoginComponent,
    SignupComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgToastModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
