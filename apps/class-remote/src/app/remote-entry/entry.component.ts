import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClassCoreComponent } from '@kousik-workspace/class-core';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  imports: [CommonModule, ClassCoreComponent, RouterModule],
  selector: 'app-class-remote-entry',
  template: `<router-outlet></router-outlet>`,
})
export class RemoteEntryComponent {}
