import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  baseUrl :string = `${environment.apiUrl}Category/`;
  constructor(
    private http : HttpClient
  ) { }

  getCategories() : Observable<any>{
    return this.http.get(`${this.baseUrl}getall`)
  }
}
