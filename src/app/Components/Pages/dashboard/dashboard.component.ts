import { Component, inject } from '@angular/core';
import { subscribeOn } from 'rxjs';
import { User } from 'src/app/Models/User.model';
import { ApiService } from 'src/app/Services/api.service';
import { AuthService } from 'src/app/Services/auth.service';
import { UserStoreService } from 'src/app/Services/user-store.service';
import { NgToastModule, NgToastService } from 'ng-angular-popup';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import ValidateForm from 'src/app/Helpers/validateform';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  
})
export class DashboardComponent {


  type: string = "password";
  isText: boolean = false;
  eyeIcon: string = "fa-eye-slash";

  signUpForm!: FormGroup;
  //
  users: any;
  public fullName : string = "";
  public role : string = "";
  constructor(
    private api: ApiService,
    private userStore: UserStoreService,
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router,
    private toast: NgToastService
  ) {}

  ngOnInit(){

    this.getAllUSers();

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

    this.signUpForm = this.fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      username: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      role: ['User' || '', Validators.required]
    })
  }


  getAllUSers(){
    this.api.getUsers().subscribe(res => {
      this.users = res;
    })
  }

  logout(){
    this.auth.signOut();
  }

  hideShowPass(){
    this.isText = !this.isText;
    this.isText ? this.eyeIcon = "fa-eye" : this.eyeIcon = "fa-eye-slash";
    this.isText ? this.type = "text" : this.type = "password";
  }

  onSignUp(){
    if(this.signUpForm.valid){
      console.log(this.signUpForm.value);
      this.auth.signUp(this.signUpForm.value)
      .subscribe({
        next:(res) => {
          this.toast.success({detail: "SUCCESS", summary: res.message, duration:3000});
          this.signUpForm.reset();
        },
        error:(err) => {
          this.toast.error({detail: "ERROR", summary: err, duration: 3000});
        }
      })
    } else {
      ValidateForm.validateAllFormFields(this.signUpForm);

    }
  }

  removeUser(userId: number, userName: string){
    let answer = confirm('Bạn có chắc muốn xóa người dùng ' + userName);
    if(answer){
      this.auth.revmoveUser(userId)
      .subscribe({
        next: (res) => {
          this.toast.success({detail: 'SUCCESS', summary: res.message, duration: 3000});
          this.getAllUSers();
        },
        error:(err) => {
          this.toast.error({detail: 'ERROR', summary: err.message, duration:3000});
        }
      })
      
    }
  }

}
