import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'lib-new-student-button',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './new-student-button.component.html',
  styleUrl: './new-student-button.component.scss',
})
export class NewStudentButtonComponent {
  constructor(private router: Router) {}

 
}
