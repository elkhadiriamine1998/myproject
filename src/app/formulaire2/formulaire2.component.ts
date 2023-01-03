import { Component, ElementRef } from '@angular/core';
import { User } from '../interface/user';

@Component({
  selector: 'app-formulaire2',
  templateUrl: './formulaire2.component.html',
  styleUrls: ['./formulaire2.component.css']
})
export class Formulaire2Component {

  etudiant: number = 322;
  dir: any = { prenom: 'Adrien' };
  user: User = { id: 1, name: 'John', email: 'john.wick@gmail.com' }
  quantites: number[] = [12, 189, 17, 12];
  userList: Array<User> = [
    { "id": 2, name: "AGaro", email: 'AGaro.AGaro@gmail.com' },
    { "id": 3, name: "GOGO", email: 'GOGO.GOGO@gmail.com' },
    { "id": 4, name: "Naruto", email: 'Naruto.Naruto@gmail.com' }
  ];
  position: number = 2;
  

  data: any[] = [{
    "id": 1,
    "name": "abc",
    "address": {
      "streetName": "cde",
      "streetId": 2
    },
    "projets": [
      {
        "libelle": "lib1",
        "description": "desc1"
      },
      {
        "libelle": "lib1",
        "description": "desc1"
      }
    ]
  },
  {
    "id": 2,
    "name": "abc",
    "address": {
      "streetName": "cde",
      "streetId": 2
    },
    "projets": [
      {
        "libelle": "lib1",
        "description": "desc1"
      },
      {
        "libelle": "lib1",
        "description": "desc1"
      }
    ]
  }];





  afficheMessage(msg: string): void {
    alert("mon message: " + msg);
  }
  afficheMessage2(msg: string, event: any): void {
    alert("Mon message: " + msg);
    event.preventDefault();
    event.stopPropagation();
  }
  /*
  afficheUser(user: User):string{
    var s:string = "";
    for (var ele of user) {
      s += ele; 
      
    }
    return s;
  }
*/

}
