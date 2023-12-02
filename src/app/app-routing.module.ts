import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './Components/home-page/home-page.component';
import { ErrPageComponent } from './Components/err-page/err-page.component';
import { ListProductsComponent } from './Components/list-products/list-products.component';
import { ShopPageComponent } from './Components/shop-page/shop-page.component';

const routes: Routes = [
  { path: '',
    component: HomePageComponent
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
    path: '**',
    component: ErrPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes),],
  exports: [RouterModule]
})
export class AppRoutingModule { }
