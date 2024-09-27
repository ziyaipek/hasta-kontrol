import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  // Admin menu items
  {
    name: 'Dashboard',
    url: '/dashboard',
    iconComponent: { name: 'cil-view-module' }
  },
  {
    title: true,
    name: 'Admin'
  },
  {
    name: 'Doctors',
    url: '/admin/doctors',
    iconComponent: { name: 'cil-people' }
  },
  {
    name: 'Patients',
    url: '/admin/patients',
    iconComponent: { name: 'cil-people' }
  },
  {
    name: 'Medicines',
    url: '/admin/medicines',
    iconComponent: { name: 'cil-medical-cross' }
  },
  {
    name: 'Diseases',
    url: '/admin/diseases',
    iconComponent: { name: 'cil-healing' }
  },
  {
    title: true,
    name: 'Doctor'
  },
  // Doctor menu items
  {
    name: 'My Patients',
    url: '/doctor/my-patients',
    iconComponent: { name: 'cil-people' }
  },
  {
    name: 'Medicines',
    url: '/doctor/medicines',
    iconComponent: { name: 'cil-medical-cross' }
  },
  {
    name: 'Diseases',
    url: '/doctor/diseases',
    iconComponent: { name: 'cil-healing' }
  },
  {
    title: true,
    name: 'Patient'
  },
  // Patient menu items
  {
    name: 'My Health Information',
    url: '/patient/my-health-information',
    iconComponent: { name: 'cil-user' }
  },
  {
    name: 'Generate QR Code',
    url: '/patient/generate-qr-code',
    iconComponent: { name: 'cil-qr-code' }
  }
];