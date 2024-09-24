import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'lib-subject-grid-options',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './subject-grid-options.component.html',
  styleUrl: './subject-grid-options.component.scss',
})
export class SubjectGridOptionsComponent {
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
