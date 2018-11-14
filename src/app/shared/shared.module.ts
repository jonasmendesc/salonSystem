import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './input/input.component';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';

@NgModule({
  // todos os componestes do module deve se declarados aqui
  declarations: [InputComponent],
  // importa todos os modules necessarios usados pelos componentes desses modules
  imports: [
    CommonModule
  ],
  // Aqui declara todos os modules que serão vistos por outros modulos da aplicação(Componentes e putros Modules podem ser exportados aqui)
  exports: [InputComponent, CommonModule, FormsModule, ReactiveFormsModule]
})
export class SharedModule { }
