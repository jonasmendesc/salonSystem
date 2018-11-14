import { Routes } from '@angular/router';
import { InstitucionalComponent } from '../app/institucional/institucional.component';

export const ROUTES: Routes = [
	{ path: '', component: InstitucionalComponent},
	{ path: 'login', loadChildren: '../app/login/login.module#LoginModule' },
	{ path: 'register', loadChildren: '../app/register/register.module#RegisterModule' }
]