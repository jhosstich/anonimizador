import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {

  public checkoutForm: FormGroup;
  public selectedFile!: File;
  constructor(private formBuilder: FormBuilder){
    this.checkoutForm = this.formBuilder.group({
      name: '',
      surname:'',
      dni:'',
      street:'',
      street_number:'',
      postal_code:'',
      address: '',
      file: new FormControl(null, [Validators.required])
    });
  }

  onFileSelected(event: any) {
    this.selectedFile = <File>event.target.files[0]
    console.log(event)
  }

  onSubmit(customerData:any) {
    console.log(this.checkoutForm.value)
    this.checkoutForm.reset();
    console.warn('Your order has been submitted', {customerData});
  }
}
