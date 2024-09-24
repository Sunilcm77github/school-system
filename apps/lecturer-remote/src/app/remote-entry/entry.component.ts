import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LecturerCoreComponent } from '@kousik-workspace/lecturer-core';

@Component({
  standalone: true,
  imports: [CommonModule, LecturerCoreComponent],
  selector: 'app-lecturer-remote-entry',
  template: `<lib-lecturer-core></lib-lecturer-core>`,
})
export class RemoteEntryComponent {}
