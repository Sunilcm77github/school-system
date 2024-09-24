import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'lib-class-grid-options',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './class-grid-options.component.html',
  styleUrl: './class-grid-options.component.scss',
})
export class ClassGridOptionsComponent {
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
