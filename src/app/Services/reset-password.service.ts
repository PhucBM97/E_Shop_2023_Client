import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { ResetPassword } from '../Models/reset-password.model';

@Injectable({
  providedIn: 'root'
})
export class ResetPasswordService {
  private baseUrl: string = `${environment.apiUrl}User/`;

  constructor(private http: HttpClient) { }

  sendResetPasswordLink(email: string){
    return this.http.post<any>(`${this.baseUrl}send-reset-email/${email}`, {});
  }

  resetPassword(resetPasswordOBj: ResetPassword){
    return this.http.post<any>(`${this.baseUrl}rest-password`, resetPasswordOBj);
  }
}
