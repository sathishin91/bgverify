import { Component } from '@angular/core';
import {
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss'],
})
export class AddEmployeeComponent {
  add_employee!: UntypedFormGroup;
  hide = true;
  constructor(private fb: UntypedFormBuilder) {
    this.initForm();
  }
  initForm() {
    this.add_employee = this.fb.group({
      first: ['', [Validators.required, Validators.pattern('[a-zA-Z]+')]],

      last: [''],

      email: [
        '',
        [Validators.required, Validators.email, Validators.minLength(5)],
      ],
      mobile: ['', [Validators.required]],
      joining_date: ['', [Validators.required]],
      dob: ['', [Validators.required]],
      license: ['', [Validators.required]],
      voter_id: ['', [Validators.required]],
      aadhar: ['', [Validators.required]],
      pan: ['', [Validators.required]],
    });
  }

  onadd_employee() {
    console.log('Form Value', this.add_employee.value);
  }

  clearInput() {
    this.add_employee.reset();
  }
}
