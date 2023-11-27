import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './Components/home-page/home-page.component';
import { HttpClientModule } from '@angular/common/http';
import { ErrPageComponent } from './Components/err-page/err-page.component';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ErrPageComponent
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
