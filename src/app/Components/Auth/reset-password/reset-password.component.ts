import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConfirmPasswordValidator } from 'src/app/Helpers/confirm-password.validator';
import { ResetPassword } from '../../../Models/reset-password.model';
import { ActivatedRoute, Router } from '@angular/router';
import ValidateForm from 'src/app/Helpers/validateform';
import { ResetPasswordService } from 'src/app/Services/reset-password.service';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent {
  
  resetPasswordForm!: FormGroup;
  emailToReset!: string;
  emailToken!: string;
  resetPasswordObj = new ResetPassword();

  constructor(
    private fb: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private resetService: ResetPasswordService,
    private toast: NgToastService,
    private route: Router
    ) {}

  ngOnInit(){
    this.resetPasswordForm = this.fb.group({
      password: [null, Validators.required],
      confirmPassword: [null, Validators.required],
    },
    {
      validator: ConfirmPasswordValidator("password", "confirmPassword")
    });

    this.activatedRoute.queryParams.subscribe(val => {
      this.emailToReset = val['email'];
      let urlToken = val['code'];
      console.log(urlToken, "urltokennnnnnnnnnnnnnnnnnnnnnnn");
      
      this.emailToken = urlToken.replace(/ /g,'+');
      console.log(this.emailToken, 'qaaaaaaaaaaaaaaaaaaaaaa');

      console.log(this.emailToReset);
      
      
    })
  }

  reset(){
    if(this.resetPasswordForm.valid){
      this.resetPasswordObj.email = this.emailToReset;
      this.resetPasswordObj.emailToken = this.emailToken;
      this.resetPasswordObj.newPassword = this.resetPasswordForm.value.password;
      this.resetPasswordObj.confirmPassword = this.resetPasswordForm.value.confirmPassword;


      this.resetService.resetPassword(this.resetPasswordObj)
      .subscribe({
        next: (res) => {
          this.toast.success({
            detail: "SUCCESS",
            summary: "Password Reset Successfully"
          });

          this.route.navigate(['/'])
        },
        error: (err) => {
          this.toast.error({
            detail: "ERROR",
            summary: "Something went wrong"
          });
        }
      })
    } else {
      ValidateForm.validateAllFormFields(this.resetPasswordForm);
    }
  }
}
