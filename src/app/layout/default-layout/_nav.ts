import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  // Admin menu items
  {
    name: 'Dashboard',
    url: '/dashboard',
    iconComponent: { name: 'cil-speedometer' },
    badge: {
      color: 'info',
      text: 'NEW'
    }
  },
  {
    title: true,
    name: 'Admin'
  },
  {
    name: 'Doctors',
    url: '/admin/doctors',
    iconComponent: { name: 'cil-user' }
  },
  {
    name: 'Patients',
    url: '/admin/patients',
    iconComponent: { name: 'cil-user' }
  },
  {
    name: 'Medicines',
    url: '/admin/medicines',
    iconComponent: { name: 'cil-medical-cross' }
  },
  {
    name: 'Diseases',
    url: '/admin/diseases',
    iconComponent: { name: 'cil-medical-cross' }
  },
  {
    name: 'User Permissions',
    url: '/admin/permissions',
    iconComponent: { name: 'cil-lock-locked' }
  },
  {
    title: true,
    name: 'Doctor'
  },
  // Doctor menu items
  {
    name: 'My Patients',
    url: '/doctor/my-patients',
    iconComponent: { name: 'cil-user' }
  },
  {
    name: 'Medicines',
    url: '/doctor/medicines',
    iconComponent: { name: 'cil-medical-cross' }
  },
  {
    name: 'Diseases',
    url: '/doctor/diseases',
    iconComponent: { name: 'cil-medical-cross' }
  },
  {
    name: 'Health Reports',
    url: '/doctor/health-reports',
    iconComponent: { name: 'cil-description' }
  },
  {
    name: 'Settings',
    url: '/doctor/settings',
    iconComponent: { name: 'cil-settings' }
  },
  {
    title: true,
    name: 'Patient'
  },
  // Patient menu items
  {
    name: 'My Health Information',
    url: '/patient/my-health-info',
    iconComponent: { name: 'cil-user' }
  },
  {
    name: 'Generate QR Code',
    url: '/patient/qr-code',
    iconComponent: { name: 'cil-qr-code' }
  },
  {
    name: 'Settings',
    url: '/patient/settings',
    iconComponent: { name: 'cil-settings' }
  }
];