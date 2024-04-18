import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Brand } from '../Models/Brand.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BrandService {

  baseUrl: string = `${environment.apiUrl}Brand`
  constructor(
    private http: HttpClient
  ) { }

  getBrands(): Observable<any>{
    return this.http.get(this.baseUrl);
  }
}
