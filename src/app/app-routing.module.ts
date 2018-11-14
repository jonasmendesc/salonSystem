import { Routes } from '@angular/router';
import { InstitucionalComponent } from '../app/institucional/institucional.component';
import { LoginComponent } from '../app/login/login/login.component';
import { RegisterComponent } from '../app/register/register/register.component';

export const ROUTES: Routes = [
	{ path: '', component: InstitucionalComponent},
	{ path: 'login', component: LoginComponent },
	{ path: 'register', component: RegisterComponent }
]