import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SmartFilterComponent } from "../smart-filter/smart-filter.component";
import { NewLectererButtonComponent } from "../new-lecterer-button/new-lecterer-button.component";
import { LectererGridComponent } from "../lecterer-grid/lecterer-grid.component";

@Component({
  selector: 'lib-lecturer-core',
  standalone: true,
  imports: [CommonModule, SmartFilterComponent, NewLectererButtonComponent, LectererGridComponent],
  templateUrl: './lecturer-core.component.html',
  styleUrl: './lecturer-core.component.scss',
})
export class LecturerCoreComponent {}
