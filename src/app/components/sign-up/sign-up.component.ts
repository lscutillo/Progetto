import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.sass']
})
export class SignUpComponent implements OnInit {

  constructor(private loginService: LoginService, private router: Router ) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm){
    const name=form.value.nome;
    const surname=form.value.cognome;
    const username = form.value.username;
    const pswd = form.value.pswd;
    const email=form.value.email;
    const sex = form.value.sesso;
    const phone = form.value.phone;

    this.loginService.addUser(name, surname, username, pswd, email, sex, phone)
    alert("Bella "+name+" Hai creato il tuo account!\nEsegui il login con username/password\nUsername: "+username+"\nPassword: "+pswd)
    this.router.navigateByUrl('/login');
  }

}
