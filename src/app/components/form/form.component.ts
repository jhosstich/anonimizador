import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent {
  public checkoutForm: FormGroup;
  public selectedFile!: File;
  constructor(
    private formBuilder: FormBuilder,
    private apiService: ApiService
  ) {
    this.checkoutForm = this.formBuilder.group({
      name: new FormControl(null, [Validators.required]),
      surname: new FormControl(null, [Validators.required]),
      dni: '',
      street: '',
      street_number: '',
      postal_code: '',
      address: '',
      file: new FormControl(null, [Validators.required]),
    });
  }

  onFileSelected(event: any) {
    this.selectedFile = <File>event.target.files[0];
    this.checkoutForm.get('file')?.setValue(this.selectedFile);
    console.log(this.selectedFile);
  }

  onSubmit(customerData: any) {
    console.log(this.checkoutForm.value);
    this.checkoutForm.reset();
    console.warn('Your order has been submitted', { customerData });
  }

  processPDF(): void {
    console.log(this.checkoutForm.value);
    this.apiService
      .processPDF(this.checkoutForm.value)
      .subscribe((result: any) => console.log(result));
  }
}
