import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  truthVariable:boolean;
  loginForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit() {
    this.buildForm();
    this.truthVariable = false;
  }

  private buildForm() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  loginSubmitForm() {
    console.log(this.loginForm.value.email);
    console.log(this.loginForm.value.password);
  }

  changeVariable() {
    this.truthVariable = true;
  }

}
