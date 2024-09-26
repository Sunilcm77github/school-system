import { Route } from '@angular/router';
import { LecturerHomeComponent } from './lecturer-home/lecturer-home.component';

export const remoteRoutes: Route[] = [
  { path: '', component: LecturerHomeComponent },
  {
    path: 'lecturerentry',
    loadComponent: () =>
      import(
        '../remote-entry/lecturer-entry-form/lecturer-entry-form.component'
      ).then((m) => m.LecturerEntryFormComponent),
  },
];
