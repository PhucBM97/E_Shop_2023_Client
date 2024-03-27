import { EnvironmentInjector, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { Product } from '../Models/Product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private url = 'Product';

  private filter$ = new BehaviorSubject<string>('');
  private commonData$ = new BehaviorSubject<Product[]>([]);
  constructor(private http: HttpClient) { }


  getCommonData(){
    return this.commonData$.asObservable();
  }

  setcommonData(data: Product[]){
    this.commonData$.next(data);
  }


  getFilter(){
    return this.filter$.asObservable();
  }
  setFilter(value: string){
    this.filter$.next(value);
  }

  getAll(): Observable<any>{
    return this.http.get(`${environment.apiUrl}${this.url}/GetProductList`);
  }

  getProduct(id: number): Observable<any>{
    return this.http.get(`${environment.apiUrl}${this.url}/GetProductById/${id}`);
  }
}
