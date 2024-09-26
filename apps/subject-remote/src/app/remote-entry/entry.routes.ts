import { Route } from '@angular/router';
import { SubjectHomeComponent } from './subject-home/subject-home.component';

export const remoteRoutes: Route[] = [
  { path: '', component: SubjectHomeComponent },
  {
    path: 'subjectentry',
    loadComponent: () =>
      import(
        '../remote-entry/new-subject-entry/new-subject-entry.component'
      ).then((m) => m.NewSubjectEntryComponent),
  },
];
