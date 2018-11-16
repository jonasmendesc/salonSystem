import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'slsys-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  emailPattern = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {

  	this.loginForm = this.formBuilder.group({ 
  		email: this.formBuilder.control('', [Validators.required, Validators.pattern(this.emailPattern)]),
  		password: this.formBuilder.control('', [Validators.required, Validators.minLength(5), Validators.maxLength(12)])
  	})

  }

}
