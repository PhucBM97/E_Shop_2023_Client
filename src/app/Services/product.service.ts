import { EnvironmentInjector, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private url = 'SanPham';
  constructor(private http: HttpClient) { }

  getAll(): Observable<any>{
    return this.http.get(`${environment.apiUrl}/${this.url}`);
  }
}
