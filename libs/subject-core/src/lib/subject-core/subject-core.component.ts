import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubjectSmartFilterComponent } from "../subject-smart-filter/subject-smart-filter.component";
import { NewSubjectButtonComponent } from "../new-subject-button/new-subject-button.component";
import { SubjectGridComponent } from "../subject-grid/subject-grid.component";

@Component({
  selector: 'lib-subject-core',
  standalone: true,
  imports: [CommonModule, SubjectSmartFilterComponent, NewSubjectButtonComponent, SubjectGridComponent],
  templateUrl: './subject-core.component.html',
  styleUrl: './subject-core.component.scss',
})
export class SubjectCoreComponent {}
