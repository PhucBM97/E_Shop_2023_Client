import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, catchError, switchMap, throwError } from 'rxjs';
import { AuthService } from '../Services/auth.service';
import { NgToastService } from 'ng-angular-popup';
import { Router } from '@angular/router';
import { TokenApiModel } from '../Models/token-api.model';


@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(
    private auth: AuthService,
    private toast: NgToastService,
    private router: Router
  ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const myToken = this.auth.getToken();

    // edit header request
    if(myToken){
      request = request.clone({
        setHeaders: {Authorization: `Bearer ${myToken}`}
      })
    }
    return next.handle(request).pipe(
      catchError((err) => {
        if(err instanceof HttpErrorResponse){
          if(err.status === 401){
            return this.handleUnAuthorizedError(request, next);
          } else if (err.status === 400){
            return throwError(() => err?.error.message);
          }
        }
        return throwError(() => new Error("Something Went Wrong"))
      })
    );
  }

  // Lấy token mới từ server và gửi vào header request như ở trên 1 lần nữa
  handleUnAuthorizedError(req: HttpRequest<any>, next: HttpHandler){
    let tokenApiModel = new TokenApiModel();
    tokenApiModel.accessToken = this.auth.getToken()!;
    tokenApiModel.refreshToken = this.auth.getRefreshToken()!;
    return this.auth.renewToken(tokenApiModel)
    .pipe(
      switchMap((data: TokenApiModel) => {
        this.auth.storeRefreshToken(data.refreshToken)
        this.auth.storeToken(data.accessToken)
        req = req.clone({
          setHeaders: {Authorization: `Bearer ${data.accessToken}`}
        })
        return next.handle(req);
      }),
      catchError((err) => {
        return throwError(() => {
          this.toast.warning({detail: "Warning", summary: "Token is expired, Please Login again"});
          this.router.navigate(['login'])
        })
      })
    );

  }
}
