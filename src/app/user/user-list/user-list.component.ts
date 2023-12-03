import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Authentication } from 'src/app/model/authentication';
import { User } from 'src/app/model/user';
import { UserPassword } from 'src/app/model/user-password';
import { MatDialog } from '@angular/material/dialog';
import { DialogOverviewExampleDialog } from 'src/app/admin/mat-components/dialogs/dialog-overview/dialog-overview.component';
import { UserPasswordComponent } from '../user-password/user-password.component';
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  id: string;
  name: string;

  user: User;
  userPassword: UserPassword;

  displayedColumns: string[] = ['id','name', 'login', 'email', 'acao'];
  list: Authentication[];


  constructor(
    public dialog: MatDialog,
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

  openDialogPassword(user: User) {
    console.log(JSON.stringify(user))
    const dialogRef = this.dialog.open(UserPasswordComponent, {
      width: '250px',
      data: {name: user.name, login: user.login, id: user.id},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed = ' + JSON.stringify( result));
      this.id = result;
      this.password(result);
    });
  }

  password(user: any) {
    setTimeout(() => {
      this.userService.password(user).subscribe((result:User) => {
        console.log( JSON.stringify(result));
    } , err => {
      console.log('erro de autenticação='+ JSON.stringify(err.status));
    });
    }, 500);
  }

}
