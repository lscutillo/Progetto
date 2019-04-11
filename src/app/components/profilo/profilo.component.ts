import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profilo',
  templateUrl: './profilo.component.html',
  styleUrls: ['./profilo.component.scss']
})
export class ProfiloComponent implements OnInit {
  name : string = localStorage.name;
  surname :string = localStorage.surname;
  sex : string = localStorage.sex;
  email : string = localStorage.email;
  phone : string = localStorage.phone;
  
  

  constructor() { }

  
  ngOnInit() {
  }

}
