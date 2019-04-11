import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent implements OnInit {

  feedbackForm: FormGroup;
  ngOnInit() {
  }

  constructor(private fb: FormBuilder) { // <--- inject FormBuilder
    this.createForm();
  }

  createForm() {
    this.feedbackForm = this.fb.group({
      name: '',
      surname: '',
      sex: '',
      phone: '',
      feedback: '',
    });
  }

  sendEmail() {
    console.log(this.feedbackForm.value);
  }

}
