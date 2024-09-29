import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from 'src/core/services/api/api.service';
import { Doctor } from 'src/core/models/Doctor';

@Component({
  selector: 'app-doctors',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  providers: [ApiService],
  templateUrl: './doctors.component.html',
  styleUrl: './doctors.component.scss'
})
export class DoctorsComponent implements OnInit {
  doctors: any[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    // Doktorları al ve component'teki `doctors` array'ine at
    this.apiService.getAllDoctors().subscribe((result) => {
      this.doctors = result.data;
      console.log(this.doctors);
    });
  }

  deleteDoctor(id: number) {
    // Kullanıcıdan silme işlemi için onay al
    if (confirm('Bu doktoru silmek istediğinizden emin misiniz?')) {
      this.apiService.deleteDoctor(id).then(() => {
        // Silme işlemi başarılı olduğunda, doktoru listeden çıkar
        this.doctors = this.doctors.filter(doctor => doctor.id !== id);
        alert('Doktor başarıyla silindi');
      }).catch(error => {
        console.error('Silme işlemi başarısız: ', error);
        alert('Doktor silinirken bir hata oluştu. Lütfen tekrar deneyin.');
      });
    }
  }

  editDoctor(id: number) {
    console.log('Doktor düzenleniyor: ', id);
    // Bu kısma editDoctor ile ilgili işlemler eklenebilir
  }

  

  addNewDoctor() {
    console.log('Yeni doktor ekleniyor');
    // Yeni doktor ekleme işlemi burada yapılabilir
  }
}
