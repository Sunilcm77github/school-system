import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-new-student-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './new-student-button.component.html',
  styleUrl: './new-student-button.component.scss',
})
export class NewStudentButtonComponent {}
