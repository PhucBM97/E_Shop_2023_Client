import { Injectable } from '@angular/core';
import { Cart } from '../Models/Cart.model';
import { BehaviorSubject } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { Item } from '../Models/Item.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public cartItemList: Item[] = [];
  ProductJson: string = "";

  private numberOfItems$ = new BehaviorSubject<number>(0);
  constructor(
    private cookie: CookieService
  ) { }

  ngOnInit(){
    
  }
  getNumberOfItems(){
    return this.numberOfItems$.asObservable();
  }
  setNumberOfItems(value: number){
    this.numberOfItems$.next(value);
  }
  getCart(){
    if(!this.cookie.check('productList'))
      this.cookie.set('productList', '');
    let products = JSON.stringify(this.cookie.get('productList'));
    return products;
  }
  setCart(cartItems: any){
    const expires = new Date(Date.now() + (4 * 60 * 60 * 1000));
    this.cookie.set('product', JSON.stringify(cartItems),expires);
  }
  setProducts(product: Item){
    this.cookie.set('productList', JSON.stringify(product));
  }
}
