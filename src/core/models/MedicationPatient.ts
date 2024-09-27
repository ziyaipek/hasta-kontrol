import { Medication } from './Medication';
import { Patient } from './Patient';

export class MedicationPatient {
  Id: number = 0; 
  MedicationID: number = 0; 
  Medication: Medication = new Medication(); 
  PatientID: number = 0; 
  Patient: Patient = new Patient(); 
}
