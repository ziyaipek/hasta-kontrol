import { Routes } from '@angular/router';


export const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Admin'
    },
    children: [
      {
        path: '',
        redirectTo: 'admin',
        pathMatch: 'full'
      },
      {
        path: 'diseases',
        loadComponent: () => import('./diseases/diseases.component').then(m => m.DiseasesComponent),
        data: {
          title: 'Diseases'
        }
      },
      {
        path: 'doctors',
        loadComponent: () => import('./doctors/doctors.component').then(m => m.DoctorsComponent),
        data: {
          title: 'Doctors'
        }
      },
      {
        path: 'medicines',
        loadComponent: () => import('./medicines/medicines.component').then(m => m.MedicinesComponent),
        data: {
          title: 'Medicines'
        }
      },
      {
        path: 'patients',
        loadComponent: () => import('./patients/patients.component').then(m => m.PatientsComponent),
        data: {
          title: 'Patients'
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
        path: 'user-permissions',
        loadComponent: () => import('./user-permissions/user-permissions.component').then(m => m.UserPermissionsComponent),
        data: {
          title: 'User-Permissions'
        }
      }
      
    ]
  }
];
