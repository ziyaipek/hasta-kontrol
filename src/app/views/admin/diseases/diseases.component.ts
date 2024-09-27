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
    { id: 1, name: 'Grip', symptoms: 'Ateş, baş ağrısı, öksürük' },
    { id: 2, name: 'COVID-19', symptoms: 'Yüksek ateş, kuru öksürük, nefes darlığı' },
    { id: 3, name: 'Migren', symptoms: 'Şiddetli baş ağrısı, ışığa duyarlılık' }
  ];

  editDisease(id: number) {
    
    console.log('Hastalık düzenleniyor: ', id);
  }

  deleteDisease(id: number) {
    console.log('Hastalık siliniyor: ', id);
    this.diseases = this.diseases.filter(disease => disease.id !== id); // Hastalığı listeden kaldır
  }

  addNewDisease() {
    console.log('Yeni hastalık ekleniyor');
  }
}
