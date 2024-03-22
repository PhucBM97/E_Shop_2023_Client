import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../Services/auth.service';
import { inject } from '@angular/core';
import { NgToastService } from 'ng-angular-popup';

export const adminGuard: CanActivateFn = (route, state) => {
  if(inject(AuthService).getRoleFromToken() === 'Admin')
  return true;
else {
  inject(NgToastService).error({detail: "ERROR", summary: "You don't have permission to access"});
  inject(Router).navigate(['login'])
  return false;
}
};
