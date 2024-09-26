import {environment} from "../../../environments/environment.development";

export const ApiEndpoints : {[key: string] : string} = {
    "AdminGetAll": environment.api_url + "/Admin/GetAll",
    "AdminGetById": environment.api_url + "/Admin/GetById",
    "AdminCreate": environment.api_url + "/Admin/Create",
    "AdminUpdate": environment.api_url + "/Admin/Update",
    "AdminDelete": environment.api_url + "/Admin/Delete",
    
    "DiseaseGetAll": environment.api_url + "/Disease/GetAll",
    "DiseaseGetById": environment.api_url + "/Disease/GetById",
    "DiseaseCreate": environment.api_url + "/Disease/Create",
    "DiseaseUpdate": environment.api_url + "/Disease/Update",
    "DiseaseDelete": environment.api_url + "/Disease/Delete",
    
    "DoctorGetAll": environment.api_url + "/Doctor/GetAll",
    "DoctorGetById": environment.api_url + "/Doctor/GetById",
    "DoctorCreate": environment.api_url + "/Doctor/Create",
    "DoctorUpdate": environment.api_url + "/Doctor/Update",
    "DoctorDelete": environment.api_url + "/Doctor/Delete",
    
    "DoctorPatientGetAll": environment.api_url + "/DoctorPatient/GetAll",
    "DoctorPatientGetById": environment.api_url + "/DoctorPatient/GetById",
    "DoctorPatientCreate": environment.api_url + "/DoctorPatient/Create",
    "DoctorPatientUpdate": environment.api_url + "/DoctorPatient/Update",
    "DoctorPatientDelete": environment.api_url + "/DoctorPatient/Delete",
    
    "MedicationGetAll": environment.api_url + "/Medication/GetAll",
    "MedicationGetById": environment.api_url + "/Medication/GetById",
    "MedicationCreate": environment.api_url + "/Medication/Create",
    "MedicationUpdate": environment.api_url + "/Medication/Update",
    "MedicationDelete": environment.api_url + "/Medication/Delete",
    
    "MedicationPatientGetAll": environment.api_url + "/MedicationPatient/GetAll",
    "MedicationPatientGetById": environment.api_url + "/MedicationPatient/GetById",
    "MedicationPatientCreate": environment.api_url + "/MedicationPatient/Create",
    "MedicationPatientUpdate": environment.api_url + "/MedicationPatient/Update",
    "MedicationPatientDelete": environment.api_url + "/MedicationPatient/Delete",
    
    "PatientGetAll": environment.api_url + "/Patient/GetAll",
    "PatientGetById": environment.api_url + "/Patient/GetById",
    "PatientCreate": environment.api_url + "/Patient/Create",
    "PatientUpdate": environment.api_url + "/Patient/Update",
    "PatientDelete": environment.api_url + "/Patient/Delete",
    
    "PatientDiseaseGetAll": environment.api_url + "/PatientDisease/GetAll",
    "PatientDiseaseGetById": environment.api_url + "/PatientDisease/GetById",
    "PatientDiseaseCreate": environment.api_url + "/PatientDisease/Create",
    "PatientDiseaseUpdate": environment.api_url + "/PatientDisease/Update",
    "PatientDiseaseDelete": environment.api_url + "/PatientDisease/Delete",
  };
  