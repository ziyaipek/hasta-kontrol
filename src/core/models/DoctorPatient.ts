import { Patient } from './Patient';
import { Doctor } from './Doctor';

export class DoctorPatient {
Id: number = 0; 
PatientID: number = 0; 
  Patient: Patient = new Patient(); 
  DoctorID: number = 0; 
  Doctor: Doctor = new Doctor(); 
}
