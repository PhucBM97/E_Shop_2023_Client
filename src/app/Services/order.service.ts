import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { OrderStatusCodeDTO } from './../Models/OrderStatusCode.model';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  baseUrl : string = `${environment.apiUrl}Order`;
  constructor(
    private http: HttpClient
  ) { }

  getOrders(): Observable<any>{
    return this.http.get(`${this.baseUrl}/getorders`);
  }
  getDetail(orderId : number): Observable<any>{
    return this.http.get(`${this.baseUrl}/getorderdetail/${orderId}`);
  }

  updateStatus(statusCode: OrderStatusCodeDTO): Observable<any>{
    return this.http.put(`${this.baseUrl}/updatestatus`, statusCode);
  }
}
