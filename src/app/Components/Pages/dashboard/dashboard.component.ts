import { Component, inject } from '@angular/core';
import { subscribeOn } from 'rxjs';
import { User } from 'src/app/Models/User.model';
import { ApiService } from 'src/app/Services/api.service';
import { AuthService } from 'src/app/Services/auth.service';
import { UserStoreService } from 'src/app/Services/user-store.service';
import { NgToastModule } from 'ng-angular-popup';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  
})
export class DashboardComponent {

  users: any;
  public fullName : string = "";
  public role : string = "";
  constructor(
    private auth: AuthService,
    private api: ApiService,
    private userStore: UserStoreService
  ) {}

  ngOnInit(){
    this.api.getUsers().subscribe(res => {
      this.users = res;
    })

    this.userStore.getFullNameFromStore()
    .subscribe(res => {
      let fullNameFromToken = this.auth.getfullNameFromToken();
      this.fullName = res || fullNameFromToken;
    })

    this.userStore.getRoleFromStore()
    .subscribe(res => {
      let roleFromtoken = this.auth.getRoleFromToken();
      this.role = res || roleFromtoken;
      console.log(this.role);
      
    })
  }

  logout(){
    this.auth.signOut();
  }

}
