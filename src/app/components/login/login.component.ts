import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit() {
    sessionStorage.clear();
    //console.log(sessionStorage);
  }

  doLogin(user, pswd){
    this.loginService.login(user, pswd);
    this.router.navigateByUrl('/ShoesSelling/home');
    console.log(sessionStorage);
  }
}

