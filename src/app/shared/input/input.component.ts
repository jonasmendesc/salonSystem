import { Component, OnInit, Input, ContentChild, AfterContentInit } from '@angular/core';
import { FormControlName  } from '@angular/forms';

@Component({
  selector: 'slsys-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit, AfterContentInit {

  constructor() { }

  formControlName : FormControlName;

  @Input() errorMessage: string;
  @Input() label: string;

  inputFormControlName : any;

  @ContentChild(FormControlName) control = FormControlName;

  ngOnInit() {
  }

  ngAfterContentInit(){
  	
  	this.inputFormControlName = this.control;

  	if(this.inputFormControlName === undefined) throw new Error('Esse componente precisa ser usado com uma diretiva formControlName');
  	
  }

  hasSuccess(): boolean {
		return this.inputFormControlName.valid && (this.inputFormControlName.dirty || this.inputFormControlName.touched)
  }

  hasError(): boolean {
  	return this.inputFormControlName.invalid && (this.inputFormControlName.dirty || this.inputFormControlName.touched)
  }

}
