import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profilo',
  templateUrl: './profilo.component.html',
  styleUrls: ['./profilo.component.scss']
})
export class ProfiloComponent implements OnInit {

  name: string = localStorage.getItem('name');
  surname: string = localStorage.getItem('surname');
  sex: string = localStorage.getItem('sex');
  email: string = localStorage.getItem('email');
  phone: string = localStorage.getItem('phone');
  username: string = localStorage.getItem('username');
  
  constructor() { }

  
  ngOnInit() {
  }

}
