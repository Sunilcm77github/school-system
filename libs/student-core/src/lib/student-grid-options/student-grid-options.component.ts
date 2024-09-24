import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'lib-student-grid-options',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './student-grid-options.component.html',
  styleUrl: './student-grid-options.component.scss',
})
export class StudentGridOptionsComponent {
  constructor(private router: Router) {}
  agInit(params: any): void {
    // Optional initialization logic
  }

  refresh(params: any): boolean {
    return false;
  }

  openDetails(): void {
    this.router.navigate(['/details']);
  }

  onDelete(): void {
    console.log('Delete clicked');
  }
}
