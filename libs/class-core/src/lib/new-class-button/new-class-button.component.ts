import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'lib-new-class-button',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './new-class-button.component.html',
  styleUrl: './new-class-button.component.scss',
})
export class NewClassButtonComponent {
  constructor(private router: Router) {}

  onNewButtonClick(): void {
    this.router.navigate(['/classentry'], {});
  }
}
