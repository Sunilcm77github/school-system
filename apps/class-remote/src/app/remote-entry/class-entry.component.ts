import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClassEntryFormComponent } from '@kousik-workspace/class-entry-form';

@Component({
  selector: 'app-class-entry',
  standalone: true,
  imports: [CommonModule, ClassEntryFormComponent],
  template: `<lib-class-entry-form></lib-class-entry-form>`,
})
export class ClassEntryComponent {}
