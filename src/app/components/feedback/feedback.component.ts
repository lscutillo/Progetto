import { Component }              from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularWaitBarrier } from 'blocking-proxy/built/lib/angular_wait_barrier';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent {
  feedbackForm: FormGroup;

  name: string = this.name;

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

  sendEmail(){
    console.log(this.feedbackForm.value);
  }

}
