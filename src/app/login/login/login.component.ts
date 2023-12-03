import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AnyObject } from 'chart.js/types/basic';
import { Authentication } from 'src/app/model/authentication';
import { AutenticationService } from 'src/app/services/autentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  authentication: Authentication;

  constructor(private router: Router,
              private autenticationService: AutenticationService) {}

  ngOnInit() {}

  onLogin() {
    this.authentication = new Authentication();
    this.authentication.login = 'admin';
    this.authentication.password = 'admin';

    setTimeout(() => {
      this.autenticationService.login(this.authentication).subscribe((result:AnyObject) => {
        console.log(result);
        localStorage.setItem('isLoggedin', 'true');
        localStorage.setItem('authorization', result.jwtToken + '');
        localStorage.setItem('login', result.login + '');
        this.router.navigate(['/dashboard']);
    } , err => {
      console.log('erro de autenticação='+ JSON.stringify(err.status));
    });
    }, 3350);
  }

    
}
