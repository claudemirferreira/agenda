import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Authentication } from '../model/authentication';

@Injectable({
  providedIn: 'root'
})
export class AutenticationService {

  constructor(private http: HttpClient) {}

  login(user: Authentication){
    return this.http.post(`${environment.URL}authenticate`,user);
  }

}
