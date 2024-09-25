import { Disease } from './Disease';
import { Patient } from './Patient';

export class PatientDisease {
  id: number = 0;
  patientId: number = 0; 
  diseaseId: number = 0; 
  patient: Patient = new Patient(); 
  disease: Disease = new Disease(); 
}
