import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.scss']
})
export class UserCreateComponent implements OnInit {
  user: User;

  constructor(
    private userService: UserService) { }

  ngOnInit(): void {
    this.user = new User();
  }
  
  create() {
    setTimeout(() => {
      this.userService.create(this.user).subscribe((result:User) => {
        this.user = result
        console.log( JSON.stringify(result));
    } , err => {
      console.log('erro de autenticação='+ JSON.stringify(err.status));
    });
    }, 500);
  }

}
