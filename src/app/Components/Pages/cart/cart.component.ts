import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { CartService } from 'src/app/Services/cart.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
  
  productCart: any[] = [];
  totalPrice: number = 0;
  constructor(
    private cookie: CookieService,
    private cart: CartService
  ) {}

  ngOnInit(){
    this.getProductFromCookie();

  }


  getProductFromCookie(){
    this.productCart = JSON.parse(this.cookie.get('product'));
    let total = 0;
    let count = 0;
    this.productCart.map(value => {
      total += (value.productPrice * value.productQuantity);
      count++;
    })
    this.totalPrice = total;
    return count;
    console.log(total, 'totalllllllll');
    
  }

  dec(info: any){
    this.productCart.map(value => {
      if(value.productName === info.productName){
        value.productQuantity--;
        return;
      }
    });
    this.cart.setCart(this.productCart);
    this.getProductFromCookie();
    
  }

  inc(info: any){
    this.productCart.map(value => {
      if(value.productName === info.productName){
        value.productQuantity++;
        return;
      }
    })
    this.cart.setCart(this.productCart);
    this.getProductFromCookie();

  }

  remove(index: number){
    console.log(this.productCart, 'listttt');
    let data = this.productCart.splice(index,1);
        
    this.cart.setCart(this.productCart);
    this.cart.setNumberOfItems(this.getProductFromCookie());
    
  }
}
