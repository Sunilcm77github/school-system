import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-new-subject-entry',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './new-subject-entry.component.html',
  styleUrl: './new-subject-entry.component.scss',
})
export class NewSubjectEntryComponent {
  subjectForm: FormGroup;
  availableClasses = ['5', '6', '7', '8', '9', '10'];

  constructor(private fb: FormBuilder) {
    this.subjectForm = this.fb.group({
      subjectName: ['', Validators.required],
      subjectCode: ['', Validators.required],
      teacher: ['', Validators.required],
      maxMarks: ['', [Validators.required, Validators.min(0)]],
      passMarks: ['', [Validators.required, Validators.min(0)]],
      class: ['', Validators.required],
      elective: [false],
    });
  }

  onSubmit() {
    if (this.subjectForm.valid) {
      console.log(this.subjectForm.value);
    } else {
      this.subjectForm.markAllAsTouched();
    }
  }

  onCancel() {
    this.subjectForm.reset();
  }
}
