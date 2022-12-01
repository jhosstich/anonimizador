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
      surname:'',
      dni:'',
      street:'',
      street_number:'',
      postal_code:'',
      address: ''
    });


  }

  onSubmit(customerData:any) {
    console.log(this.checkoutForm.value)
    this.checkoutForm.reset();
    console.warn('Your order has been submitted', {customerData});
  }
}
