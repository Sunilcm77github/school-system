import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentSmartFilterComponent } from "../student-smart-filter/student-smart-filter.component";
import { NewStudentButtonComponent } from "../new-student-button/new-student-button.component";
import { StudentGridComponent } from "../student-grid/student-grid.component";

@Component({
  selector: 'lib-student-core',
  standalone: true,
  imports: [CommonModule, StudentSmartFilterComponent, NewStudentButtonComponent, StudentGridComponent],
  templateUrl: './student-core.component.html',
  styleUrl: './student-core.component.scss',
})
export class StudentCoreComponent {}
