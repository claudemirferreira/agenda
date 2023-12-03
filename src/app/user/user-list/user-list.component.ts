import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Authentication } from 'src/app/model/authentication';
import { User } from 'src/app/model/user';
import { UserPassword } from 'src/app/model/user-password';
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  user: User;
  userPassword: UserPassword;

  displayedColumns: string[] = ['id','name', 'login', 'email', 'acao'];
  list: Authentication[];


  constructor(
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.user = new User();
    this.user.name = 'ok';
    console.log(JSON.stringify(this.user));
    this.findAll();
  }

  findAll() {
    setTimeout(() => {
      this.userService.findAll().subscribe((result:Authentication[]) => {
        this.list = result
        console.log( JSON.stringify(result));
    } , err => {
      console.log('erro de autenticação='+ JSON.stringify(err.status));
    });
    }, 500);
  }

  delete(user: User) {
    console.log(JSON.stringify(user))
  }


  onNoClick(user: User): void {
    
  }

  password() {
    this.userPassword = new UserPassword();
    this.userPassword.id = 11;
    this.userPassword.password = 'admin';
    setTimeout(() => {
      this.userService.password(this.userPassword).subscribe((result:User) => {
        console.log( JSON.stringify(result));
    } , err => {
      console.log('erro de autenticação='+ JSON.stringify(err.status));
    });
    }, 500);
  }

}
