import { NgModule } from '@angular/core';
import { RegisterComponent } from './register/register.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { RegisterRouters } from './register-routing.module';

@NgModule({
  declarations: [RegisterComponent],
  imports: [
    SharedModule
  ],
  exports: [RegisterComponent]
})
export class RegisterModule { }
