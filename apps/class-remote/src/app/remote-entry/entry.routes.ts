import { Route } from '@angular/router';
import { RemoteEntryComponent } from './entry.component';
import { ClassEntryComponent } from './class-entry.component';
import { ClassHomeComponent } from '../remote-entry/classHome.component';

export const remoteRoutes: Route[] = [
  { path: '', component: ClassHomeComponent },
  // {path: 'classentry', component:ClassEntryComponent},
  // {
  //   path: 'class',
  //   // data: { page: 'project', breadcrumb: 'Entry' },
  //   loadComponent: () => import('../remote-entry/classHome.component').then(m => m.ClassHomeComponent)
  // },
  {
    path: 'classentry',
    // data: { page: 'project', breadcrumb: 'Entry' },
    loadComponent: () =>
      import('../remote-entry/class-entry.component').then(
        (m) => m.ClassEntryComponent
      ),
  },
];
