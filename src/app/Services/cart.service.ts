import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { Item } from '../Models/Item.model';
import { OrderDTO } from '../Models/OrderDTO.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public cartItemList: Item[] = [];
  ProductJson: string = "";
  baseUrl:string = `${environment.apiUrl}Order`;

  private numberOfItems$ = new BehaviorSubject<number>(0);
  constructor(
    private cookie: CookieService,
    private http: HttpClient
  ) { }

  ngOnInit(){
    
  }
  getNumberOfItems(){
    return this.numberOfItems$.asObservable();
  }
  setNumberOfItems(value: number){
    this.numberOfItems$.next(value);
  }
  // getCart(){
  //   if(!this.cookie.check('productList'))
  //     this.cookie.set('productList', '');
  //   let products = JSON.stringify(this.cookie.get('productList'));
  //   return products;
  // }
  setCart(cartItems: any){
    const expires = new Date(Date.now() + (4 * 60 * 60 * 1000));
    this.cookie.set('product', JSON.stringify(cartItems),expires);
  }
  setProducts(product: Item){
    this.cookie.set('productList', JSON.stringify(product));
  }

  createOrder(order: OrderDTO) : Observable<any>{
    return this.http.post(`${this.baseUrl}/CreateOrder`, order);
  }
}
