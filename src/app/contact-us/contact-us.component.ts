import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  ngOnInit() {
  }

  email = new FormControl('', [Validators.required, Validators.email]);
  name = new FormControl('', [Validators.required, Validators.minLength(4)]);
  subject = new FormControl('', [Validators.required, Validators.minLength(4)]);
  message = new FormControl('', [Validators.required, Validators.minLength(10)]);


  getEmailErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
        this.email.hasError('email') ? 'Not a valid email' : '';
  }

  getNameErrorMessage() {
    return this.name.hasError('required') ? 'You must enter a name' : '';
  }

  getSubjectErrorMessage() {
    return this.subject.hasError('required') ? 'You must enter a subject' : '';
  }

  getMessageErrorMessage(){
    return this.message.hasError('required') ? 'You must enter a message' : '';
  }

}
