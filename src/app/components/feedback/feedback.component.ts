import { Component }              from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent {
  feedbackForm: FormGroup;

  constructor(private fb: FormBuilder) { // <--- inject FormBuilder
    this.createForm();
  }

  createForm() {
    this.feedbackForm = this.fb.group({ 
      name: ['', Validators.required ],
      surname: ['', Validators.required ],
      sex: ['', Validators.required ],
      phone: '',
      feedback: ['', Validators.required ],
    });
  }
}
