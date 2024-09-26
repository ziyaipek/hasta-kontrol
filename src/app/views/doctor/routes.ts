import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
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
      {
        path: 'diseases',
        loadComponent: () => import('./diseases/diseases.component').then(m => m.DiseasesComponent),
        data: {
          title: 'Diseases'
        }
      },
      {
        path: 'health-reports',
        loadComponent: () => import('./health-reports/health-reports.component').then(m => m.HealthReportsComponent),
        data: {
          title: 'Health-Reports'
        }
      },
      {
        path: 'settings',
        loadComponent: () => import('./settings/settings.component').then(m => m.SettingsComponent),
        data: {
          title: 'Settings'
        }
      },
      {
        path: 'my-patients',
        loadComponent: () => import('./my-patients/my-patients.component').then(m => m.MyPatientsComponent),
        data: {
          title: 'My-Patients'
        }
      }
    ]
  }
];
