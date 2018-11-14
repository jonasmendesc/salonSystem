import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
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
    // Se minhas rotas estiveram em modelo raiz, senão usar forChildren
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
