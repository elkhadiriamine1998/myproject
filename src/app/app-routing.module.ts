import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormulaireComponent } from './components/formulaire/formulaire.component';
import { Formulaire2Component } from './components/formulaire2/formulaire2.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { UserComponent } from './components/user/user.component';
import { UsersComponent } from './components/users/users.component';


const routes: Routes = [
  {path:"", component: Formulaire2Component},
  {path: "formulaire", component: FormulaireComponent}, 
  {path: "404", component: NotFoundComponent },
  {path: "users", component: UsersComponent },
  {path: "users/:userId", component: UserComponent },



  // redirection vers le chemin /404 quand le user se
  // trompe du chemin  "**" ie tous les chemins
  // toujours à placer le dernier
  {path: "**", redirectTo:"/404"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
