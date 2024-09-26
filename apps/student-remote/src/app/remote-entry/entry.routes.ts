import { Route } from '@angular/router';
import { StudentHomeComponent } from './student-home/student-home.component';

export const remoteRoutes: Route[] = [
  { path: '', component: StudentHomeComponent },
  {
    path: 'studententry',
    loadComponent: () =>
      import(
        '../remote-entry/new-student-entry/new-student-entry.component'
      ).then((m) => m.NewStudentEntryComponent),
  },
];
