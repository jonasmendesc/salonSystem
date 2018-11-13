import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Modulo da minha aplicação que conter todos os serviços para toda a aplicação

@NgModule({
  declarations: [], // Lista de componentes do modulos
  imports: [
    CommonModule // faz a immportacao de outros modulos dentro modulo
  ],
  exports: [] // exportar os compomente que serão visiveis por outros modulos
})
export class CoreModule { }
