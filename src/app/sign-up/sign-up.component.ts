import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  signUpForm;//property for form model

  constructor(private formBuilder: FormBuilder) {
    this.signUpForm = this.formBuilder.group({ //definimos el modelo
      name: '',
      address: '',
      password: ''
    });
  }

  ngOnInit(): void {
  }

  onSubmit(customerData) {
    this.signUpForm.reset();
    console.warn('Your order has been submitted', customerData);
  }
}
