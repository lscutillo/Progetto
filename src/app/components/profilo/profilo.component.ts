import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profilo',
  templateUrl: './profilo.component.html',
  styleUrls: ['./profilo.component.scss']
})
export class ProfiloComponent implements OnInit {

  name: string = sessionStorage.getItem('name');
  surname: string = sessionStorage.getItem('surname');
  sex: string = sessionStorage.getItem('sex');
  phone: string = sessionStorage.getItem('phone');
  email: string = sessionStorage.getItem('email');
  username: string = sessionStorage.getItem('username');
  
  constructor() { }

  ngOnInit() {
  }

}
