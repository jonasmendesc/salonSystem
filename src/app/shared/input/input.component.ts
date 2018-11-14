import { Component, OnInit, Input } from '@angular/core';
import { InputModel } from './input.model';

@Component({
  selector: 'slsys-input',
  templateUrl: './input.component.html'
})
export class InputComponent implements OnInit {

  constructor() { }

  @Input() input: InputModel; 

  ngOnInit() {
  }

}
