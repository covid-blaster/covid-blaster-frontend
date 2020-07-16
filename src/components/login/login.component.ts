import { RouterModule } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  extraVariable:boolean;
  truthVariable:boolean;
  loginForm: FormGroup;
  registerForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) { }

  ngOnInit() {
    this.buildForm();
    this.truthVariable = false;
    this.extraVariable = true;
    this.http.get("https://covid-blasters-app.us-east.cf.appdomain.cloud/health").subscribe(res => console.log(res));
    //http://dummy.restapiexample.com/api/v1/employees
  }

  private buildForm() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
    this.registerForm = this.formBuilder.group({
      firstNameOne: ['', Validators.required],
      lastNameOne: ['', Validators.required],
      emailOne: ['', Validators.required],
      passwordOne: ['', Validators.required],
    });
  }

  newRegistrationClick() {
    console.log(this.registerForm.value.firstName);
    console.log(this.registerForm.value.lastName);
    console.log(this.registerForm.value.email);
    console.log(this.registerForm.value.password);
    this.registerClick();
  }

  loginSubmitForm() {


    console.log(this.loginForm.value.email);
    console.log(this.loginForm.value.password);
  }

  changeVariable() {
    this.truthVariable = true;
  }

  changeExtraVariable() {
    this.truthVariable = true;
    this.extraVariable = false;
  }

  goBack() {
    this.truthVariable = false;
    this.extraVariable = true;
  }

  registerClick() {
    this.router.navigateByUrl("/groups");
  }
}
