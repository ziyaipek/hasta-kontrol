import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-medicines',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './medicines.component.html',
  styleUrl: './medicines.component.scss'
})
export class MedicinesComponent {
  medications = [
    { id: 1, name: 'Parol', dose: '500mg' },
    { id: 2, name: 'Aspirin', dose: '100mg' },
    { id: 3, name: 'Augmentin', dose: '625mg' }
  ];

  editMedication(id: number) {
    console.log('İlaç düzenleniyor: ', id);
  }

  deleteMedication(id: number) {
    console.log('İlaç siliniyor: ', id);
  }

  addNewMedication() {
    console.log('Yeni ilaç ekleniyor');
  }
}
