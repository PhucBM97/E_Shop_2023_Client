import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../Services/auth.service';
import { NgToastService } from 'ng-angular-popup';

export const authGuard: CanActivateFn = (route, state) => {
  if(inject(AuthService).isLoggedIn())
    return true;
  else {
    inject(NgToastService).error({detail: "ERROR", summary: "Please Login First!"});
    inject(Router).navigate(['login'])
    return false;
  }
};
