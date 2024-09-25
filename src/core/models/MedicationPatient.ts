import { Medication } from './Medication';
import { Patient } from './Patient';

export class MedicationPatient {
  id: number = 0; 
  medicationId: number = 0; 
  patientId: number = 0; 
  medication: Medication = new Medication(); 
  patient: Patient = new Patient(); 
}
