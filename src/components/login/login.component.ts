import { MaterialModule } from './../../modules/material-module';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit() {
    this.buildForm();
    // this.authService.user$.pipe((take(1)))
    // .subscribe(res => {
    //   if (res && res['emailVerified']) {
    //     this.routeManagerService.navigateTo('mappage');
    //   }
    // });
  }

  private buildForm() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  public loginSubmitForm() {
    // this.authService.emailSignIn(this.loginForm.value.email, this.loginForm.value.password);
  }

  public goToSignUp() {
    // this.routeManagerService.navigateTo('/signup');
  }

}
