import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  LectererGridComponent,
  NewLectererButtonComponent,
  SmartFilterComponent,
} from '@kousik-workspace/lecturer-core';

@Component({
  selector: 'app-lecturer-home',
  standalone: true,
  imports: [
    CommonModule,
    SmartFilterComponent,
    NewLectererButtonComponent,
    LectererGridComponent,
  ],
  templateUrl: './lecturer-home.component.html',
  styleUrl: './lecturer-home.component.scss',
})
export class LecturerHomeComponent {}
