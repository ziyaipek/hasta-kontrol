import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from 'src/core/services/api/api.service';
import { MatDialog } from '@angular/material/dialog';
import { PatientModalComponent } from 'src/app/views/admin/patient-modal/patient-modal.component';
import { EditPatientModalComponent } from 'src/app/views/admin/edit-patient-modal/edit-patient-modal.component';

@Component({
  selector: 'app-patients',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  providers: [ApiService],
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.scss']
})
export class PatientsComponent implements OnInit {
  patients: any[] = [];

  constructor(private apiService: ApiService, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.apiService.getAllPatients().subscribe((result) => {
      this.patients = result.data;
      console.log(this.patients);
    });
  }

  updatePatient(id: number): void {
    const patientToEdit = this.patients.find(p => p.id === id);

    if (patientToEdit) {
      const dialogRef = this.dialog.open(EditPatientModalComponent, {
        width: '400px',
        data: patientToEdit
      });

      dialogRef.afterClosed().subscribe((result) => {
        if (result) {
          this.apiService.updatePatient(id, result).subscribe(
            (response) => {
              console.log('Hasta başarıyla güncellendi:', response);
              const index = this.patients.findIndex(p => p.id === id);
              if (index !== -1) {
                this.patients[index] = response.data; 
              }
              alert('Hasta başarıyla güncellendi!');
            },
            (error) => {
              console.error('Hasta güncellenirken hata oluştu:', error);
              alert('Hasta güncellenirken bir hata oluştu. Lütfen tekrar deneyin.');
            }
          );
        }
      });
    }
  }

  deletePatient(id: number) {
    if (confirm('Bu hastayı silmek istediğinizden emin misiniz?')) {
      this.apiService.deletePatient(id).then(() => {
        this.patients = this.patients.filter(patient => patient.id !== id);
        alert('Hasta başarıyla silindi');
      }).catch(error => {
        console.error('Silme işlemi başarısız: ', error);
        alert('Hasta silinirken bir hata oluştu. Lütfen tekrar deneyin.');
      });
    }
  }

  createPatient(): void {
    const dialogRef = this.dialog.open(PatientModalComponent, {
      width: '400px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.apiService.createPatient(result).subscribe(
          (response) => {
            console.log('Hasta başarıyla eklendi:', response);
            this.patients.push(response.data);
            alert('Hasta başarıyla eklendi!');
          },
          (error) => {
            console.error('Hasta eklenirken hata oluştu:', error);
            alert('Hasta eklenirken bir hata oluştu. Lütfen tekrar deneyin.');
          }
        );
      }
    });
  }
}
