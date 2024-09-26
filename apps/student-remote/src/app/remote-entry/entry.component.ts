import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentCoreComponent } from '@kousik-workspace/student-core';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  imports: [CommonModule, StudentCoreComponent, RouterModule],
  selector: 'app-student-remote-entry',
  template: `<router-outlet></router-outlet>`,
})
export class RemoteEntryComponent {}
