import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FileService {

  private url = 'File';
  constructor(private http: HttpClient) { }
  // uploadFile(file: File) {
  //   const formData = new FormData();
  //   formData.append('file', file);
  //   return this.http.post<any>(`${environment.apiUrl}${this.url}`, formData);
  // }

  createObject(formData: FormData): Observable<any> {
    return this.http.post<any>(`${environment.apiUrl}Product/AddProduct`, formData);
  }
}
