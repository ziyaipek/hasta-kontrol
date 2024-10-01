import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule
import { ApiService } from 'src/core/services/api/api.service';
import { MatDialog } from '@angular/material/dialog';
import { DoctorModalComponent } from 'src/app/views/admin/doctor-modal/doctor-modal.component';
import { EditDoctorModalComponent } from 'src/app/views/admin/edit-doctor-modal/edit-doctor-modal.component';

@Component({
  selector: 'app-doctors',
  standalone: true,
  imports: [CommonModule, HttpClientModule], // HttpClientModule'i buraya ekle
  providers: [ApiService],
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.scss']
})
export class DoctorsComponent implements OnInit {
  doctors: any[] = [];
  

  constructor(private apiService: ApiService, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.refresh();
  }

  refresh() {
    this.apiService.getAllDoctors().subscribe((result) => {
      this.doctors = result.data;
      console.log(this.doctors);
    });
  }


  updateDoctor(id: number): void {
    const doctorToEdit = this.doctors.find(d => d.id === id);

    if (doctorToEdit) {
      const dialogRef = this.dialog.open(EditDoctorModalComponent, {
        width: '400px',
        data: doctorToEdit
      });

      dialogRef.afterClosed().subscribe((result) => {
        if (result) {
          this.apiService.updateDoctor(id, result).subscribe(
            (response) => {
              console.log('Doktor başarıyla güncellendi:', response);
              const index = this.doctors.findIndex(d => d.id === id);
              if (index !== -1) {
                this.doctors[index] = response.data; 
              }
              alert('Doktor başarıyla güncellendi!');
              this.refresh();
            },
            (error) => {
              console.error('Doktor güncellenirken hata oluştu:', error);
              alert('Doktor güncellenirken bir hata oluştu. Lütfen tekrar deneyin.');
            }
          );
        }
      });
    }
  }

  deleteDoctor(id: number) {
    if (confirm('Bu doktoru silmek istediğinizden emin misiniz?')) {
      this.apiService.deleteDoctor(id).then(() => {
        this.doctors = this.doctors.filter(doctor => doctor.id !== id);
        alert('Doktor başarıyla silindi');
        this.refresh();
      }).catch(error => {
        console.error('Silme işlemi başarısız: ', error);
        alert('Doktor silinirken bir hata oluştu. Lütfen tekrar deneyin.');
      });
    }
  }

  createDoctor(): void {
    const dialogRef = this.dialog.open(DoctorModalComponent, {
      width: '400px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.apiService.createDoctor(result).subscribe(
          (response) => {
            console.log('Doktor başarıyla eklendi:', response);
            this.doctors.push(response.data);
            alert('Doktor başarıyla eklendi!');
            this.refresh();
          },
          (error) => {
            console.error('Doktor eklenirken hata oluştu:', error);
            alert('Doktor eklenirken bir hata oluştu. Lütfen tekrar deneyin.');
          }
        );
      }
    });
  }
}
