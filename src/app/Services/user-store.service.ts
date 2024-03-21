import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserStoreService {

  private fullname$ = new BehaviorSubject<string>('');
  private role$ = new BehaviorSubject<string>('');

  constructor() { }

  public getRoleFromStore(){
    return this.role$.asObservable();
  }

  public setRoleForStore(role: string){
    this.role$.next(role);
  }

  public getFullNameFromStore(){
    return this.fullname$.asObservable();
  }

  public setFullNameForStore(fullName: string){
    this.fullname$.next(fullName);
  }
}
