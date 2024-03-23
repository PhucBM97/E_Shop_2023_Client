import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validator, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import ValidateForm from 'src/app/Helpers/validateform';
import { AuthService } from 'src/app/Services/auth.service';
import { ResetPasswordService } from 'src/app/Services/reset-password.service';
import { UserStoreService } from 'src/app/Services/user-store.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  type: string = "password";
  isText: boolean = false;
  eyeIcon: string = "fa-eye-slash";
  loginForm!: FormGroup;

  public resetPasswordEmail!: string;
  public isValidEmail!: boolean;


  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router,
    private toast: NgToastService,
    private userStore : UserStoreService,
    private resetService : ResetPasswordService
    ) {}

  ngOnInit(): void{
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
    
  }



  hideShowPass(){
    this.isText = !this.isText;
    this.isText ? this.eyeIcon = "fa-eye" : this.eyeIcon = "fa-eye-slash";
    this.isText ? this.type = "text" : this.type = "password";
  }

  onLogin(){
    if(this.loginForm.valid){
      console.log(this.loginForm.value)
      this.auth.login(this.loginForm.value)
      .subscribe({
        next:(res) => {
          this.loginForm.reset();
          // store
          this.auth.storeToken(res.accessToken);
          this.auth.storeRefreshToken(res.refreshToken);
          // get token vừa lưu -> giải mã -> trả về payload của token
          const tokenPayload = this.auth.decodedToken();
          // dùng name, role của user gán vào 1 đối tượng Observable
          // để subcriber nhận được name, role mỗi khi có thay đổi
          this.userStore.setFullNameForStore(tokenPayload.unique_name);
          this.userStore.setRoleForStore(tokenPayload.role);
          this.toast.success({detail: "SUCCESS", summary: res.message, duration: 3000});
          if(tokenPayload.role === 'Admin'){
            this.router.navigate(['dashboard'])
          } else {
            this.router.navigate(['home'])
          }
        },
        error:(err) => {
          this.toast.error({detail: "ERROR", summary: err, duration:3000});
        },
      })
    } else {

      ValidateForm.validateAllFormFields(this.loginForm);
      alert("Your form is invalid")
      // lỗi
    }
  }

  checkValidEmail(event: string){
    const value = event;
    const pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    this.isValidEmail = pattern.test(value);
    return this.isValidEmail;
  }

  confirmToSend(){
    if(this.checkValidEmail(this.resetPasswordEmail)){
      console.log(this.resetPasswordEmail);
      this.resetService.sendResetPasswordLink(this.resetPasswordEmail)
      .subscribe({
        next: (res) => {
          this.toast.success({
            detail: "SUCCESS",
            summary: "Email Sent, Please check your mailbox!",
            duration: 3000
          });

          this.resetPasswordEmail = "";
          const closeBtn = document.getElementById('closeBtn');
          closeBtn?.click();
        },
        error: (err) => {
          this.toast.error({
            detail: "ERROR",
            summary: "Something went wrong!",
            duration: 3000
          });
        }
      })
    }
  }


}
