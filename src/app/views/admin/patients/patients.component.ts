import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Patient } from 'src/core/models/Patient';
import { HttpClientModule } from '@angular/common/http'
import { ApiService } from 'src/core/services/api/api.service';
@Component({
  selector: 'app-patients',
  standalone: true,
  providers: [ApiService],
  imports: [CommonModule,HttpClientModule],
  templateUrl: './patients.component.html',
  styleUrl: './patients.component.scss'
})
export class PatientsComponent implements OnInit{
  patients : any[]=[];
  
  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getAllPatients().subscribe((result) => {
      this.patients = result.data;
      console.log(this.patients);
    });
  }

  deletePatient(id: number) {
    // Kullanıcıdan silme işlemi için onay al
    if (confirm('Bu patient silmek istediğinizden emin misiniz?')) {
      this.apiService.deleteDoctor(id).then(() => {
        // Silme işlemi başarılı olduğunda, doktoru listeden çıkar
        this.patients = this.patients.filter(patient => patient.id !== id);
        alert('patient başarıyla silindi');
      }).catch(error => {
        console.error('Silme işlemi başarısız: ', error);
        alert('patient silinirken bir hata oluştu. Lütfen tekrar deneyin.');
      });
    }
  }


 
  editPatient(Id: number) {

    console.log('Hasta düzenleniyor: ', Id);
  }

  

  addNewPatient() {

    console.log('Yeni hasta ekleniyor');
  }
}
