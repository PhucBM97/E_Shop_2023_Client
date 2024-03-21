import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { User } from '../Models/User';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseUrl: string = `${environment.apiUrl}/User`;

  constructor(private http: HttpClient) { }
  getUsers(){
    return this.http.get<User>(this.baseUrl);
  }
}
