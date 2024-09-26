import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-new-student-entry',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './new-student-entry.component.html',
  styleUrl: './new-student-entry.component.scss',
})
export class NewStudentEntryComponent {
  studentForm: FormGroup;
  availableClasses = ['5', '6', '7', '8', '9', '10'];

  constructor(private fb: FormBuilder) {
    this.studentForm = this.fb.group({
      name: ['', Validators.required],
      rollNo: ['', Validators.required],
      parentsName: ['', Validators.required],
      mobileNumber: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      class: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.studentForm.valid) {
      console.log(this.studentForm.value);
    } else {
      this.studentForm.markAllAsTouched();
    }
  }

  onCancel() {
    this.studentForm.reset();
  }
}
