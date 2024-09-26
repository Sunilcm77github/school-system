import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LecturerCoreComponent } from '@kousik-workspace/lecturer-core';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  imports: [CommonModule, LecturerCoreComponent, RouterModule],
  selector: 'app-lecturer-remote-entry',
  template: `<router-outlet></router-outlet>`,
})
export class RemoteEntryComponent {}
