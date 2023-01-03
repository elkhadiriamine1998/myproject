import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormulaireComponent } from './formulaire/formulaire.component';
import { Formulaire2Component } from './formulaire2/formulaire2.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {path:"", component: Formulaire2Component},
  {path: "formulaire", component: FormulaireComponent}, 
  {path: "404", component: NotFoundComponent },

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
