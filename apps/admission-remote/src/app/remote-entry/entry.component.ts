import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdmissionCoreComponent } from '@kousik-workspace/admission-core';

@Component({
  standalone: true,
  imports: [CommonModule, AdmissionCoreComponent],
  selector: 'app-admission-remote-entry',
  template: `<lib-admission-core></lib-admission-core>`,
})
export class RemoteEntryComponent {}
