import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubjectCoreComponent } from '@kousik-workspace/subject-core';

@Component({
  standalone: true,
  imports: [CommonModule, SubjectCoreComponent],
  selector: 'app-subject-remote-entry',
  template: `<lib-subject-core></lib-subject-core>`,
})
export class RemoteEntryComponent {}
