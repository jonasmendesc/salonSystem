import { Component, OnInit } from '@angular/core';
import { InputModel } from '../../shared/input/input.model';

@Component({
  selector: 'slsys-register',
  templateUrl: './register.component.html'
})
export class RegisterComponent implements OnInit {

  constructor() { }

  inputs: InputModel [] = [{ type: "text", placeHolder: "Nome da empresa", spanClasse: "glyphicon glyphicon-user form-control-feedback" }, 
  						   { type: "email", placeHolder: "Email", spanClasse: "glyphicon glyphicon-envelope form-control-feedback" },
  						   { type: "password", placeHolder: "Senha", spanClasse: "glyphicon glyphicon-lock form-control-feedback" },
  						   { type: "password", placeHolder: "Confirmar Senha", spanClasse: "glyphicon glyphicon-log-in form-control-feedback" }]

  ngOnInit() {
  }

}
