import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule
import { ApiService } from 'src/core/services/api/api.service';
import { MatDialog } from '@angular/material/dialog';
import { DiseaseModalComponent } from 'src/app/views/admin/disease-modal/disease-modal.component';
import { EditDiseaseModalComponent } from 'src/app/views/admin/edit-disease-modal/edit-disease-modal.component';

@Component({
  selector: 'app-diseases',
  standalone: true,
  imports: [CommonModule, HttpClientModule], // HttpClientModule'i buraya ekle
  providers: [ApiService],
  templateUrl: './diseases.component.html',
  styleUrls: ['./diseases.component.scss']
})
export class DiseasesComponent implements OnInit {
  diseases: any[] = [];

  constructor(private apiService: ApiService, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.apiService.getAllDiseases().subscribe((result) => {
      this.diseases = result.data;
      console.log(this.diseases);
    });
  }

  updateDisease(id: number): void {
    const diseaseToEdit = this.diseases.find(d => d.id === id);

    if (diseaseToEdit) {
      const dialogRef = this.dialog.open(EditDiseaseModalComponent, {
        width: '400px',
        data: diseaseToEdit
      });

      dialogRef.afterClosed().subscribe((result) => {
        if (result) {
          this.apiService.updateDisease(id, result).subscribe(
            (response) => {
              console.log('Hastalık başarıyla güncellendi:', response);
              const index = this.diseases.findIndex(d => d.id === id);
              if (index !== -1) {
                this.diseases[index] = response.data; 
              }
              alert('Hastalık başarıyla güncellendi!');
            },
            (error) => {
              console.error('Hastalık güncellenirken hata oluştu:', error);
              alert('Hastalık güncellenirken bir hata oluştu. Lütfen tekrar deneyin.');
            }
          );
        }
      });
    }
  }

  deleteDisease(id: number) {
    if (confirm('Bu hastalığı silmek istediğinizden emin misiniz?')) {
      this.apiService.deleteDisease(id).then(() => {
        this.diseases = this.diseases.filter(disease => disease.id !== id);
        alert('Hastalık başarıyla silindi');
      }).catch(error => {
        console.error('Silme işlemi başarısız: ', error);
        alert('Hastalık silinirken bir hata oluştu. Lütfen tekrar deneyin.');
      });
    }
  }

  createDisease(): void {
    const dialogRef = this.dialog.open(DiseaseModalComponent, {
      width: '400px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.apiService.createDisease(result).subscribe(
          (response) => {
            console.log('Hastalık başarıyla eklendi:', response);
            this.diseases.push(response.data);
            alert('Hastalık başarıyla eklendi!');
          },
          (error) => {
            console.error('Hastalık eklenirken hata oluştu:', error);
            alert('Hastalık eklenirken bir hata oluştu. Lütfen tekrar deneyin.');
          }
        );
      }
    });
  }
}
