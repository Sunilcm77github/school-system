import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubjectCoreComponent } from '@kousik-workspace/subject-core';

@Component({
  selector: 'app-subject-home',
  standalone: true,
  imports: [CommonModule, SubjectCoreComponent],
  templateUrl: './subject-home.component.html',
  styleUrl: './subject-home.component.scss',
})
export class SubjectHomeComponent {}
