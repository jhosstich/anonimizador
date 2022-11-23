import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {

  public checkoutForm: FormGroup;

  constructor(private formBuilder: FormBuilder){
    this.checkoutForm = this.formBuilder.group({
      name: '',
      address: ''
    });
  }

  onSubmit(customerData:any) {
    this.checkoutForm.reset();
    console.warn('Your order has been submitted', {customerData});
  }
}
