import { Patient } from './Patient';
import { Doctor } from './Doctor';

export class DoctorPatient {
  id: number = 0; 
  patientId: number = 0; 
  doctorId: number = 0; 
  patient: Patient = new Patient(); 
  doctor: Doctor = new Doctor(); 
}
