import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { LoginModule } from '../app/login/login.module';
import { RegisterModule } from '../app/register/register.module';
import { AppComponent } from './app.component';
import { ROUTES } from './app-routing.module';
import { InstitucionalComponent } from './institucional/institucional.component';

@NgModule({
  declarations: [
    AppComponent,
    InstitucionalComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    LoginModule,
    RegisterModule,
    // Se minhas rotas estiveram em modelo raiz, senão usar forChildren
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
