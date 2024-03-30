import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { CartService } from 'src/app/Services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
  
  productCart: any[] = [];
  constructor(
    private cookie: CookieService,
    private cart: CartService
  ) {}

  ngOnInit(){
    this.getProductFromCookie();

  }


  getProductFromCookie(){
    this.productCart = JSON.parse(this.cookie.get('product'));
  }
}
