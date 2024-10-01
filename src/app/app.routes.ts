import { RouterModule, Routes } from '@angular/router';
import { DefaultLayoutComponent } from './layout';
import { NgModule } from '@angular/core';
export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: '',
    component: DefaultLayoutComponent, // Ana layout olarak tanımlı
    data: {
      title: 'Home'
    },
    children: [
      // Dashboard
      {
        path: 'dashboard',
        loadChildren: () => import('./views/dashboard/routes').then(m => m.routes)
      },
      // Doctor Routes
      {
        path: 'doctor',
        loadChildren: () => import('./views/doctor/routes').then(m => m.routes)
      },
      // Admin Routes
      {
        path: 'admin',
        loadChildren: () => import('./views/admin/routes').then(m => m.routes)
      },
      // Patient Routes
      {
        path: 'patient',
        loadChildren: () => import('./views/patient/routes').then(m => m.routes)
      },
      // Theme
      {
        path: 'theme',
        loadChildren: () => import('./views/theme/routes').then(m => m.routes)
      },
      // Base
      {
        path: 'base',
        loadChildren: () => import('./views/base/routes').then(m => m.routes)
      },
      // Buttons
      {
        path: 'buttons',
        loadChildren: () => import('./views/buttons/routes').then(m => m.routes)
      },
      // Forms
      {
        path: 'forms',
        loadChildren: () => import('./views/forms/routes').then(m => m.routes)
      },
      // Icons
      {
        path: 'icons',
        loadChildren: () => import('./views/icons/routes').then(m => m.routes)
      },
      // Notifications
      {
        path: 'notifications',
        loadChildren: () => import('./views/notifications/routes').then(m => m.routes)
      },
      // Widgets
      {
        path: 'widgets',
        loadChildren: () => import('./views/widgets/routes').then(m => m.routes)
      },
      // Charts
      {
        path: 'charts',
        loadChildren: () => import('./views/charts/routes').then(m => m.routes)
      },
      // Pages
      {
        path: 'pages',
        loadChildren: () => import('./views/pages/routes').then(m => m.routes)
      }
    ]
  },
  // Error Pages
  {
    path: '404',
    loadComponent: () => import('./views/pages/page404/page404.component').then(m => m.Page404Component),
    data: {
      title: 'Page 404'
    }
  },
  {
    path: '500',
    loadComponent: () => import('./views/pages/page500/page500.component').then(m => m.Page500Component),
    data: {
      title: 'Page 500'
    }
  },
  // Authentication Pages
  {
    path: 'login',
    loadComponent: () => import('./views/pages/login/login.component').then(m => m.LoginComponent),
    data: {
      title: 'Login Page'
    }
  },
  {
    path: 'register',
    loadComponent: () => import('./views/pages/register/register.component').then(m => m.RegisterComponent),
    data: {
      title: 'Register Page'
    }
  },
  // QR Page Example
  {
    path: 'qr-page',
    loadComponent: () => import('./views/pages/qr-page/qr-page.component').then(m => m.QrPageComponent),
    data: {
      title: 'QR Page'
    }
  },
  // Fallback Route
  { 
    path: '**', 
    redirectTo: '404' // 404 sayfasına yönlendirme yap
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {}