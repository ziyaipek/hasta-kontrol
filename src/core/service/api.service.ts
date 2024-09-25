import { Injectable, Type } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, catchError, map, share, throwError } from 'rxjs';
import { environment } from '../../../../src/environments/environment';
import { BaseDataResponse } from 'src/core/models/response/base-data-response.model';
import { TokenResponse } from 'src/core/models/response/token-response.model';
import { BaseResponse } from 'src/core/models/response/base-response.model';
import { Admin} from 'src/core/models/Admin'
import { Disease } from 'src/core/models/Disease';
import { Doctor } from 'src/core/models/Doctor';
import { DoctorPatient } from 'src/core/models/DoctorPatient';
import { Patient } from 'src/core/models/Patient';
import { PatientDisease } from 'src/core/models/PatientDisease';
import { Medication } from 'src/core/models/Medication';
import { MedicationPatient } from 'src/core/models/MedicationPatient';


@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private endpoint = environment.api_url;

  constructor(private readonly http: HttpClient) {}

  getAllAdmins() {
    return this.http
      .get<BaseDataResponse<Admin[]>>(environment.api_url + '/Admin/GetAll')
      .pipe(share());
  }

  createAdmin(entity: object) {
    return this.http
      .request<BaseResponse>('post', environment.api_url + '/Admin/Create', {
        body: entity,
      })
      .pipe(share());
  }

  updateAdmin(id: number, newEntity: object) {
    return this.http
      .request<BaseResponse>(
        'put',
        environment.api_url + '/Admin/Update?id=' + id,
        { body: newEntity }
      )
      .pipe(share());
  }

  deleteAdmin(id: number) {
    return this.http
      .delete<BaseResponse>(environment.api_url + '/Admin/Delete?id=' + id)
      .pipe(share())
      .toPromise();
  }



  getAllDoctors() {
    return this.http
      .get<BaseDataResponse<Doctor[]>>(environment.api_url + '/Doctor/GetAll')
      .pipe(share());
  }

  createDoctor(entity: object) {
    return this.http
      .request<BaseResponse>('post', environment.api_url + '/Doctor/Create', {
        body: entity,
      })
      .pipe(share());
  }

  updateDoctor(id: number, newEntity: object) {
    return this.http
      .request<BaseResponse>(
        'put',
        environment.api_url + '/Doctor/Update?id=' + id,
        { body: newEntity }
      )
      .pipe(share());
  }

  deleteDoctor(id: number) {
    return this.http
      .delete<BaseResponse>(environment.api_url + '/Doctor/Delete?id=' + id)
      .pipe(share())
      .toPromise();
  }


  getAllPatients() {
    return this.http
      .get<BaseDataResponse<Patient[]>>(environment.api_url + '/Patient/GetAll')
      .pipe(share());
  }

  createPatient(entity: object) {
    return this.http
      .request<BaseResponse>('post', environment.api_url + '/Patient/Create', {
        body: entity,
      })
      .pipe(share());
  }

  updatePatient(id: number, newEntity: object) {
    return this.http
      .request<BaseResponse>(
        'put',
        environment.api_url + '/Patient/Update?id=' + id,
        { body: newEntity }
      )
      .pipe(share());
  }

  deletePatient(id: number) {
    return this.http
      .delete<BaseResponse>(environment.api_url + '/Patient/Delete?id=' + id)
      .pipe(share())
      .toPromise();
  }


  getAllMedications() {
    return this.http
      .get<BaseDataResponse<Medication[]>>(environment.api_url + '/Medication/GetAll')
      .pipe(share());
  }

  createMedication(entity: object) {
    return this.http
      .request<BaseResponse>('post', environment.api_url + '/Medication/Create', {
        body: entity,
      })
      .pipe(share());
  }

  updateMedication(id: number, newEntity: object) {
    return this.http
      .request<BaseResponse>(
        'put',
        environment.api_url + '/Medication/Update?id=' + id,
        { body: newEntity }
      )
      .pipe(share());
  }

  deleteMedication(id: number) {
    return this.http
      .delete<BaseResponse>(environment.api_url + '/Medication/Delete?id=' + id)
      .pipe(share())
      .toPromise();
  }


  getAllDiseases() {
    return this.http
      .get<BaseDataResponse<Disease[]>>(environment.api_url + '/Disease/GetAll')
      .pipe(share());
  }

  createDisease(entity: object) {
    return this.http
      .request<BaseResponse>('post', environment.api_url + '/Disease/Create', {
        body: entity,
      })
      .pipe(share());
  }

  updateDisease(id: number, newEntity: object) {
    return this.http
      .request<BaseResponse>(
        'put',
        environment.api_url + '/Disease/Update?id=' + id,
        { body: newEntity }
      )
      .pipe(share());
  }

  deleteDisease(id: number) {
    return this.http
      .delete<BaseResponse>(environment.api_url + '/Disease/Delete?id=' + id)
      .pipe(share())
      .toPromise();
  }


  getAllDoctorPatients() {
    return this.http
      .get<BaseDataResponse<DoctorPatient[]>>(environment.api_url + '/DoctorPatient/GetAll')
      .pipe(share());
  }

  createDoctorPatient(entity: object) {
    return this.http
      .request<BaseResponse>('post', environment.api_url + '/DoctorPatient/Create', {
        body: entity,
      })
      .pipe(share());
  }

  updateDoctorPatient(id: number, newEntity: object) {
    return this.http
      .request<BaseResponse>(
        'put',
        environment.api_url + '/DoctorPatient/Update?id=' + id,
        { body: newEntity }
      )
      .pipe(share());
  }

  deleteDoctorPatient(id: number) {
    return this.http
      .delete<BaseResponse>(environment.api_url + '/DoctorPatient/Delete?id=' + id)
      .pipe(share())
      .toPromise();
  }


  getAllMedicationPatients() {
    return this.http
      .get<BaseDataResponse<MedicationPatient[]>>(environment.api_url + '/MedicationPatient/GetAll')
      .pipe(share());
  }

  createMedicationPatient(entity: object) {
    return this.http
      .request<BaseResponse>('post', environment.api_url + '/MedicationPatient/Create', {
        body: entity,
      })
      .pipe(share());
  }

  updateMedicationPatient(id: number, newEntity: object) {
    return this.http
      .request<BaseResponse>(
        'put',
        environment.api_url + '/MedicationPatient/Update?id=' + id,
        { body: newEntity }
      )
      .pipe(share());
  }

  deleteMedicationPatient(id: number) {
    return this.http
      .delete<BaseResponse>(environment.api_url + '/MedicationPatient/Delete?id=' + id)
      .pipe(share())
      .toPromise();
  }



  getAllPatientDiseases() {
    return this.http
      .get<BaseDataResponse<PatientDisease[]>>(environment.api_url + '/PatientDisease/GetAll')
      .pipe(share());
  }

  createPatientDisease(entity: object) {
    return this.http
      .request<BaseResponse>('post', environment.api_url + '/PatientDisease/Create', {
        body: entity,
      })
      .pipe(share());
  }

  updatePatientDisease(id: number, newEntity: object) {
    return this.http
      .request<BaseResponse>(
        'put',
        environment.api_url + '/PatientDisease/Update?id=' + id,
        { body: newEntity }
      )
      .pipe(share());
  }

  deletePatientDisease(id: number) {
    return this.http
      .delete<BaseResponse>(environment.api_url + '/PatientDisease/Delete?id=' + id)
      .pipe(share())
      .toPromise();
  }
}


 
