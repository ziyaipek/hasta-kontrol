import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from 'src/core/services/api/api.service';
import { HttpClientModule } from '@angular/common/http';
@Component({
  selector: 'app-diseases',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './diseases.component.html',
  styleUrl: './diseases.component.scss'
  
})
export class DiseasesComponent {
  diseases: any[] = []; 

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getAllDiseases().subscribe((result) => {
      this.diseases = result.data;
      console.log(this.diseases);
    });
  }

  deleteDisease(id: number) {
    // Kullanıcıdan silme işlemi için onay al
    if (confirm('Bu Disease silmek istediğinizden emin misiniz?')) {
      this.apiService.deleteDoctor(id).then(() => {
        // Silme işlemi başarılı olduğunda, doktoru listeden çıkar
        this.diseases = this.diseases.filter(disease => disease.id !== id);
        alert('Disease başarıyla silindi');
      }).catch(error => {
        console.error('Silme işlemi başarısız: ', error);
        alert('Disease silinirken bir hata oluştu. Lütfen tekrar deneyin.');
      });
    }
  }

  editDisease(Id: number) {
    
    console.log('Hastalık düzenleniyor: ', Id);
  }

  

  addNewDisease() {
    console.log('Yeni hastalık ekleniyor');
  }
}
