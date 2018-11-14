import { Component, OnInit } from '@angular/core';
import { InputModel } from '../../shared/input/input.model';

@Component({
  selector: 'slsys-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  constructor() { }


  inputs: InputModel [] = [{ type: "email", placeHolder: "Email", spanClasse: "glyphicon glyphicon-envelope form-control-feedback" }, 
  						   { type: "password", placeHolder: "Password", spanClasse: "glyphicon glyphicon-lock form-control-feedback" }]

  ngOnInit() {

  }

}
