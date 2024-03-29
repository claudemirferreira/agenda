import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

import {MatTableModule} from '@angular/material/table';
import { Authentication } from 'src/app/model/authentication';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  displayedColumns: string[] = ['id','name', 'login', 'email'];
  dataSource = ELEMENT_DATA;
  list: Authentication[];

  constructor(
    private userService: UserService
  ) { }

  ngOnInit(): void {
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

}
