import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from 'src/core/services/api/api.service';
@Component({
  selector: 'app-medicines',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl:'./medicines.component.html',
  styleUrl: './medicines.component.scss'
})
export class MedicinesComponent {
  medicines: any[] = []; // `any[]` yerine model tipi `Doctor[]` kullanılması daha iyi olur

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getAllMedications().subscribe((result) => {
      this.medicines = result.data;
      console.log(this.medicines);
    });
  }

  deleteMedication(id: number) {
    // Kullanıcıdan silme işlemi için onay al
    if (confirm('Bu medicines silmek istediğinizden emin misiniz?')) {
      this.apiService.deleteDoctor(id).then(() => {
        // Silme işlemi başarılı olduğunda, doktoru listeden çıkar
        this.medicines = this.medicines.filter(medicine => medicine.id !== id);
        alert('medicines başarıyla silindi');
      }).catch(error => {
        console.error('Silme işlemi başarısız: ', error);
        alert('medicines silinirken bir hata oluştu. Lütfen tekrar deneyin.');
      });
    }
  }

  editMedication(Id: number) {
    console.log('İlaç düzenleniyor: ', Id);
  }


  addNewMedication() {
    console.log('Yeni ilaç ekleniyor');
  }
}
