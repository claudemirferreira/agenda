import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import {MatTableModule} from '@angular/material/table';

const routes: Routes = [
  {
    path: '',
    component: UserListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes), MatTableModule],
  exports: [RouterModule]
})
export class UserRoutingModule { }
