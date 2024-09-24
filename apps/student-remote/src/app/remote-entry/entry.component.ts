import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentCoreComponent } from '@kousik-workspace/student-core';

@Component({
  standalone: true,
  imports: [CommonModule, StudentCoreComponent],
  selector: 'app-student-remote-entry',
  template: `<lib-student-core></lib-student-core>`,
})
export class RemoteEntryComponent {}
