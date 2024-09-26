import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubjectCoreComponent } from '@kousik-workspace/subject-core';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  imports: [CommonModule, SubjectCoreComponent, RouterModule],
  selector: 'app-subject-remote-entry',
  template: `<router-outlet></router-outlet>`,
})
export class RemoteEntryComponent {}
