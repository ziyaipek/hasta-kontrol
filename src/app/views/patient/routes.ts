import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Patient'
    },
    children: [
        {
            path: '',
            redirectTo: 'patient',
            pathMatch: 'full'
        },
        {
            path: 'generate-qr-code',
            loadComponent: () => import('./generate-qr-code/generate-qr-code.component').then(m => m.GenerateQRCodeComponent),
            data: {
              title: 'Generate-QR-Code'
            }
          },
          {
            path: 'my-health-information',
            loadComponent: () => import('./my-health-information/my-health-information.component').then(m => m.MyHealthInformationComponent),
            data: {
              title: 'My-Health-Information'
            }
          },
          {
            path: 'settings',
            loadComponent: () => import('./settings/settings.component').then(m => m.SettingsComponent),
            data: {
              title: 'Settings'
            }
          }
          
    ]
  }
];
