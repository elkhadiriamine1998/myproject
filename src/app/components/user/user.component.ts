import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  // activatedRoute va récupérer les params, ici userid à
  // partir de l'url
  // Service qui permet de récupérer le paramètre
  // de la route appelé
  constructor(private route: ActivatedRoute){}
  // methode du cycle de vie d'un composant
  // methode appelle à l'initialisation du composant
  // au moment de l'appele de la composante 
  ngOnInit(){
    // récupérer le parametre userid instantanément
    // Méthode synchrone 
    const id = this.route.snapshot.params["userId"];
    console.log(id);
      
  }



}
