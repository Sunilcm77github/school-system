import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { StudentCoreComponent } from '@kousik-workspace/student-core';

@Component({
  selector: 'app-student-home',
  standalone: true,
  imports: [CommonModule, RouterModule, StudentCoreComponent],
  templateUrl: './student-home.component.html',
  styleUrl: './student-home.component.scss',
})
export class StudentHomeComponent {}
