import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'lib-lecterer-grid-options',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lecterer-grid-options.component.html',
  styleUrl: './lecterer-grid-options.component.scss',
})
export class LectererGridOptionsComponent {
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
