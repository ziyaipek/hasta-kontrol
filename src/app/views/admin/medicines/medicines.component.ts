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
    { Id: 1, MedicationName: 'Parol', UsageInstructions: '500mg' },
    { Id: 2, MedicationName: 'Aspirin', UsageInstructions: '100mg' },
    { Id: 3, MedicationName: 'Augmentin', UsageInstructions: '625mg' }
  ];

  editMedication(Id: number) {
    console.log('İlaç düzenleniyor: ', Id);
  }

  deleteMedication(Id: number) {
    console.log('İlaç siliniyor: ', Id);
  }

  addNewMedication() {
    console.log('Yeni ilaç ekleniyor');
  }
}
