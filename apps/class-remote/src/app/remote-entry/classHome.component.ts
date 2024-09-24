import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClassCoreComponent, ClassGridComponent, NewClassButtonComponent, SmartFilterComponent } from '@kousik-workspace/class-core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-class-home',
  standalone: true,
  imports: [CommonModule,RouterModule, ClassCoreComponent,NewClassButtonComponent, ClassGridComponent, SmartFilterComponent],
  templateUrl: './classHome.component.html',
})
export class ClassHomeComponent {
  constructor(private router: Router) {}

  onNewButtonClick(): void {
    this.router.navigate(['home/class/classentry'], {});
  }
}
