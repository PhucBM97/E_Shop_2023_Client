import { Component, Input } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Product } from 'src/app/Models/Product.model';
import { CartService } from 'src/app/Services/cart.service';
import { ProductService } from 'src/app/Services/product.service';
import { Item } from './../../Models/Item.model';
import { ProductDetailDTO } from 'src/app/Models/ProductDetail.model';
import { Category } from './../../Models/Category.model';
import { NgToastService } from 'ng-angular-popup';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-products',
  templateUrl: 
  './list-products.component.html',
  styleUrls: ['./list-products.component.scss']
})
export class ListProductsComponent {
  items! : Item;
  listProduct: any[] = [];

  constructor(
    private productService: ProductService,
    private cookie: CookieService,
    private cart: CartService,
    private toast: NgToastService,
    private router : Router
    ){}

  @Input() products : ProductDetailDTO[] = [];
  


  addToCart(Category: ProductDetailDTO, redirect?: boolean){
    let hasCookie = this.cookie.check('product');
    if(!hasCookie) {
      this.listProduct.push(Category);
    } else {
      this.listProduct = JSON.parse(this.cookie.get('product'));
      // console.log(this.listProduct.map(a => a.productName === Category.productName ? a.productQuantity++ : null), 'hiiiiiiiiiiiiiiiiiiiiiiiiiii');
      
      let isExist = false;
      this.listProduct.map((value) => {
        if(value.productName === Category.productName){
          value.productQuantity++;
          isExist = true;
          return;
        }
      });
      if(!isExist)
        this.listProduct.push(Category);

      console.log(this.listProduct,'123123ghjsfdhagsfdhagsfd');
    }
    let count : number = 0;
    this.listProduct.map(() => {
        count++;
    })
    this.cart.setNumberOfItems(count);

    console.log(count, ' counttttttttttttttt');

    this.cookie.set('product', JSON.stringify(this.listProduct));
    if(redirect)
      this.router.navigate(['checkouts']);
    else
      this.toast.success({
        detail: "SUCCESS",
        summary: "Đã thêm vào giỏ hàng",
        duration: 1000
      })
  }
  
}
