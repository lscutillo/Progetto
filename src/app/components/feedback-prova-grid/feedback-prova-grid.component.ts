import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feedback-prova-grid',
  templateUrl: './feedback-prova-grid.component.html',
  styleUrls: ['./feedback-prova-grid.component.scss']
})

export class FeedbackProvaGridComponent implements OnInit {
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
