import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { User } from '../Models/User';
import { Router } from '@angular/router';
import {JwtHelperService} from '@auth0/angular-jwt'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl: string = `${environment.apiUrl}/User/`;
  private userPayload: any;
  constructor(
    private http: HttpClient,
    private route: Router
  ) {
    this.userPayload = this.decodedToken()
  }

  signUp(userObj: any){
    return this.http.post<any>(`${this.baseUrl}register`, userObj);
  }

  signOut(){
    localStorage.clear();
    this.route.navigate(['login']);
  }

  login(loginObj: User){
    return this.http.post<any>(`${this.baseUrl}authenticate`, loginObj);
  }

  storeToken(tokenValue: string){
    localStorage.setItem('token', tokenValue)
  }

  getToken(){
    return localStorage.getItem('token')
  }

  isLoggedIn(): boolean{
    return !!localStorage.getItem('token')
  }

  decodedToken(){
    const jwtHelper = new JwtHelperService();
    const token = this.getToken()!;
    console.log(jwtHelper.decodeToken(token));
    return jwtHelper.decodeToken(token);
  }

  getfullNameFromToken(){
    if(this.userPayload)
      return this.userPayload.unique_name;
  }

  getRoleFromToken(){
    if(this.userPayload)
      return this.userPayload.role;
  }




}
