import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { User } from '../Models/User';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl: string = `${environment.apiUrl}/User/`;
  constructor(private http: HttpClient) { }

  signUp(userObj: any){
    return this.http.post<any>(`${this.baseUrl}register`, userObj);
  }

  login(loginObj: User){
    return this.http.post<any>(`${this.baseUrl}authenticate`, loginObj);
  }



}
