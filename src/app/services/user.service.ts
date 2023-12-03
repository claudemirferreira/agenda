import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Authentication } from '../model/authentication';
import { User } from '../model/user';
import { UserPassword } from '../model/user-password';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {}

  findAll(){
    let token = 'Bearer '+localStorage.getItem("authorization");
    
    console.log(token)
    return this.http.get(`${environment.URL}api/users`,
      { headers: new HttpHeaders().set('Authorization', token) }
    );
  }

  create(user: User){
    let token = 'Bearer '+localStorage.getItem("authorization");  
    return this.http.post(`${environment.URL}api/users`, user,
      { headers: new HttpHeaders().set('Authorization', token) }
    );
  }

  password(user: UserPassword){
    let token = 'Bearer '+localStorage.getItem("authorization");  
    return this.http.put(`${environment.URL}api/users/password`, user,
      { headers: new HttpHeaders().set('Authorization', token) }
    );
  }

}
