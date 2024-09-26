import { Routes } from '@angular/router';

import { DoctorComponent } from './doctor.component';

export const routes: Routes = [
  {
    path: '',
    component: DoctorComponent,
    data: {
      title: 'Doctor'
    },
    children: [
      {
        path: '',
        redirectTo: 'doctor',
        pathMatch: 'full'
      },
      {
        path: 'medicines',
        loadComponent: () => import('./medicines/medicines.component').then(m => m.MedicinesComponent),
        data: {
          title: 'Medicines'
        }
      },
    ]
  }
];
