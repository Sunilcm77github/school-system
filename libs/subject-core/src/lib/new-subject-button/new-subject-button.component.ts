import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'lib-new-subject-button',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './new-subject-button.component.html',
  styleUrl: './new-subject-button.component.scss',
})
export class NewSubjectButtonComponent {}
