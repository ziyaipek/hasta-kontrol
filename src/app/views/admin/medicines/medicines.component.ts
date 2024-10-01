import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from 'src/core/services/api/api.service';
import { MatDialog } from '@angular/material/dialog';
import { MedicineModalComponent } from 'src/app/views/admin/medicine-modal/medicine-modal.component';
import { EditMedicineModalComponent } from 'src/app/views/admin/edit-medicine-modal/edit-medicine-modal.component';

@Component({
  selector: 'app-medicines',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  providers: [ApiService],
  templateUrl: './medicines.component.html',
  styleUrls: ['./medicines.component.scss']
})
export class MedicinesComponent implements OnInit {
  medicines: any[] = [];

  constructor(private apiService: ApiService, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.apiService.getAllMedications().subscribe((result) => {
      this.medicines = result.data;
      console.log(this.medicines);
    });
  }

  updateMedication(id: number): void {
    const medicineToEdit = this.medicines.find(m => m.id === id);

    if (medicineToEdit) {
      const dialogRef = this.dialog.open(EditMedicineModalComponent, {
        width: '400px',
        data: medicineToEdit
      });

      dialogRef.afterClosed().subscribe((result) => {
        if (result) {
          this.apiService.updateMedication(id, result).subscribe(
            (response) => {
              console.log('İlaç başarıyla güncellendi:', response);
              const index = this.medicines.findIndex(m => m.id === id);
              if (index !== -1) {
                this.medicines[index] = response.data; 
              }
              alert('İlaç başarıyla güncellendi!');
            },
            (error) => {
              console.error('İlaç güncellenirken hata oluştu:', error);
              alert('İlaç güncellenirken bir hata oluştu. Lütfen tekrar deneyin.');
            }
          );
        }
      });
    }
  }

  deleteMedication(id: number) {
    if (confirm('Bu ilacı silmek istediğinizden emin misiniz?')) {
      this.apiService.deleteMedication(id).then(() => {
        this.medicines = this.medicines.filter(medicine => medicine.id !== id);
        alert('İlaç başarıyla silindi');
      }).catch(error => {
        console.error('Silme işlemi başarısız: ', error);
        alert('İlaç silinirken bir hata oluştu. Lütfen tekrar deneyin.');
      });
    }
  }

  createMedication(): void {
    const dialogRef = this.dialog.open(MedicineModalComponent, {
      width: '400px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.apiService.createMedication(result).subscribe(
          (response) => {
            console.log('İlaç başarıyla eklendi:', response);
            this.medicines.push(response.data);
            alert('İlaç başarıyla eklendi!');
          },
          (error) => {
            console.error('İlaç eklenirken hata oluştu:', error);
            alert('İlaç eklenirken bir hata oluştu. Lütfen tekrar deneyin.');
          }
        );
      }
    });
  }
}
