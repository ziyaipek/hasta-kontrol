import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-diseases',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './diseases.component.html',
  styleUrl: './diseases.component.scss'
})
export class DiseasesComponent {
  diseases = [
    { Id: 1, DiseaseName: 'Grip', Symptoms: 'Ateş, baş ağrısı, öksürük' },
    { Id: 2, DiseaseName: 'COVId-19', Symptoms: 'Yüksek ateş, kuru öksürük, nefes darlığı' },
    { Id: 3, DiseaseName: 'Migren', Symptoms: 'ŞIddetli baş ağrısı, ışığa duyarlılık' }
  ];

  editDisease(Id: number) {
    
    console.log('Hastalık düzenleniyor: ', Id);
  }

  deleteDisease(Id: number) {
    console.log('Hastalık siliniyor: ', Id);
    this.diseases = this.diseases.filter(disease => disease.Id !== Id); // Hastalığı listeden kaldır
  }

  addNewDisease() {
    console.log('Yeni hastalık ekleniyor');
  }
}
