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
  selector: 'lib-class-entry-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './class-entry-form.component.html',
  styleUrl: './class-entry-form.component.scss',
})
export class ClassEntryFormComponent {
  classForm: FormGroup;
  availableSubjects = [
    'Mathematics',
    'English',
    'Science',
    'Social Studies',
    'Hindi',
  ];

  constructor(private fb: FormBuilder, private router: Router) {
    this.classForm = this.fb.group({
      class: ['', [Validators.required, Validators.pattern(/^\d+$/)]], // Class number should be numeric
      section: ['', [Validators.required, Validators.maxLength(2)]], // Section is required and single letter
      classTeacher: ['', Validators.required],
      subjects: this.fb.array([
        this.fb.control('Mathematics', Validators.required),
        this.fb.control('English', Validators.required),
        this.fb.control('Science', Validators.required),
        this.fb.control('Social Studies', Validators.required),
        this.fb.control('Hindi', Validators.required),
      ]),
    });
  }

  get subjects() {
    return this.classForm.get('subjects') as FormArray;
  }

  // Method to handle form submission
  onSubmit() {
    if (this.classForm.valid) {
      console.log(this.classForm.value);
    } else {
      this.markAllAsTouched();
    }
  }

  onCancel() {
    console.log('clicked');
    this.router.navigate(['']);
    
  }
  // Mark all fields as touched to show validation errors
  markAllAsTouched() {
    this.classForm.markAllAsTouched();
  }
}
