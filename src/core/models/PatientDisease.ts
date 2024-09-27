import { Disease } from './Disease';
import { Patient } from './Patient';

export class PatientDisease {
  Id: number = 0;
  PatientID: number = 0; 
  Patient: Patient = new Patient(); 
  DiseaseID: number = 0; 
  Disease: Disease = new Disease(); 
}
