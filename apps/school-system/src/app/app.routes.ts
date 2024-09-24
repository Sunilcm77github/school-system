import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'admission-remote',
    loadChildren: () =>
      import('admission-remote/Routes').then((m) => m.remoteRoutes),
  },
  {
    path: 'lecturer-remote',
    loadChildren: () =>
      import('lecturer-remote/Routes').then((m) => m.remoteRoutes),
  },
  {
    path: 'student-remote',
    loadChildren: () =>
      import('student-remote/Routes').then((m) => m.remoteRoutes),
  },
  {
    path: 'subject-remote',
    loadChildren: () =>
      import('subject-remote/Routes').then((m) => m.remoteRoutes),
  },
  {
    path: 'class-remote',
    loadChildren: () =>
      import('class-remote/Routes').then((m) => m.remoteRoutes),
  },
  // {
  //   path: '',
  //   component: NxWelcomeComponent,
  // },
];
