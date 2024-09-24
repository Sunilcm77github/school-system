import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewClassButtonComponent } from "../new-class-button/new-class-button.component";
import { ClassGridComponent } from "../class-grid/class-grid.component";
import { SmartFilterComponent } from "../class-smart-filter/class-smart-filter.component";

@Component({
  selector: 'lib-class-core',
  standalone: true,
  imports: [CommonModule, NewClassButtonComponent, ClassGridComponent, SmartFilterComponent],
  templateUrl: './class-core.component.html',
  styleUrl: './class-core.component.scss',
})
export class ClassCoreComponent {}
