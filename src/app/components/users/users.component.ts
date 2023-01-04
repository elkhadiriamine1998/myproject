import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/interface/user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  userList: Array<User> = [
    { "id": 2, name: "AGaro", email: 'AGaro.AGaro@gmail.com' },
    { "id": 3, name: "GOGO", email: 'GOGO.GOGO@gmail.com' },
    { "id": 4, name: "Naruto", email: 'Naruto.Naruto@gmail.com' },
    { "id": 5, name: "bishop", email: 'bishop.bishop@gmail.com' }

  ];

constructor(private router : Router){}

getUserDetails(userId: number){
  this.router.navigate(['/users',userId]);  
}


}
