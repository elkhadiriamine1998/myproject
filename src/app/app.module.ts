import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { FormulaireComponent } from './components/formulaire/formulaire.component';

import { UsersComponent } from './components/users/users.component';
import { UserComponent } from './components/user/user.component';
import { Formulaire2Component } from './components/formulaire2/formulaire2.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    FormulaireComponent,
    Formulaire2Component,
    NotFoundComponent,
    UsersComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
