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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
