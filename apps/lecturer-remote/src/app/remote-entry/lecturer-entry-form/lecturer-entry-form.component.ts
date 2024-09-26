import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormArray,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lecturer-entry-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './lecturer-entry-form.component.html',
  styleUrl: './lecturer-entry-form.component.scss',
})
export class LecturerEntryFormComponent {
  lecturerForm: FormGroup;
  availableSubjects = [
    'Mathematics',
    'English',
    'Science',
    'Social Studies',
    'Hindi',
  ];
  availableDepartments = [
    'Mathematics',
    'Science',
    'Languages',
    'Social Studies',
  ];
  availableClasses = ['5', '6', '7', '8', '9', '10'];

  constructor(private fb: FormBuilder, private router: Router) {
    this.lecturerForm = this.fb.group({
      name: ['', Validators.required],
      subject: ['', Validators.required],
      employeeId: ['', Validators.required],
      contactNumber: [
        '',
        [Validators.required, Validators.pattern(/^\d{10}$/)],
      ],
      email: ['', [Validators.required, Validators.email]],
      department: ['', Validators.required],
      experience: ['', Validators.required],
      classesHandled: this.fb.array([
        this.fb.control('', Validators.required),
        this.fb.control('', Validators.required),
        this.fb.control('', Validators.required),
      ]),
    });
  }

  get classesHandled() {
    return this.lecturerForm.get('classesHandled') as FormArray;
  }

  onCancel() {
    console.log('clicked');
    this.router.navigate(['']);
  }

  onSubmit() {
    if (this.lecturerForm.valid) {
      console.log(this.lecturerForm.value);
    } else {
      this.lecturerForm.markAllAsTouched();
    }
  }
}
