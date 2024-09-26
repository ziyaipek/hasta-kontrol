import { Routes } from '@angular/router';

import { AdminComponent } from './admin.component';

export const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    data: {
      title: 'Doctor'
    },
    children: [
      {
        path: '',
        redirectTo: 'doctor',
        pathMatch: 'full'
      }
    ]
  }
];
