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
  private paramUrl$ = new BehaviorSubject<number>(0);
  private commonData$ = new BehaviorSubject<Product[]>([]);
  constructor(private http: HttpClient) { }


  getParamUrl(){
    return this.paramUrl$.asObservable();
  }

  setParamUrl(id: number){
    this.paramUrl$.next(id);
  }
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

  getAll(CurrentPage: number, PageSize: number): Observable<any>{
    return this.http.get(`${environment.apiUrl}${this.url}/GetProductList/${CurrentPage}/${PageSize}`);
  }

  getProduct(id: number): Observable<any>{
    return this.http.get(`${environment.apiUrl}${this.url}/GetProductById/${id}`);
  }
  
  getProductsByBrand(brandId: number, currentPage: number, PageSize: number) :Observable<any>{
    return this.http.get(`${environment.apiUrl}${this.url}/GetProductByBrand/${brandId}/${currentPage}/${PageSize}`);
  }

  createProduct(formData: FormData): Observable<any> {
    return this.http.post<any>(`${environment.apiUrl}${this.url}/AddProduct`, formData);
  }

  deleteProduct(proId: number): Observable<any>{
    return this.http.delete(`${environment.apiUrl}${this.url}/delete-product/${proId}`);
  }
}
