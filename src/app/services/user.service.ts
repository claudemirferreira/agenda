import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Authentication } from '../model/authentication';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {}

  findAll(){
    let token = 'Bearer '+localStorage.getItem("authorization");
    
    console.log(token)
    return this.http.get(`${environment.URL}/api/users`,
      { headers: new HttpHeaders().set('Authorization', token) }
    );
  }

}
