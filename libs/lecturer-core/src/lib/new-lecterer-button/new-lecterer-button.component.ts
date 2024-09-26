import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'lib-new-lecterer-button',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './new-lecterer-button.component.html',
  styleUrl: './new-lecterer-button.component.scss',
})
export class NewLectererButtonComponent {}
