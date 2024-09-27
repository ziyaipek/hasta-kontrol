import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule, GridModule } from '@coreui/angular'; 
@Component({
  selector: 'app-qr-page',
  standalone: true,
  imports: [CommonModule, CardModule, GridModule],
  templateUrl: './qr-page.component.html',
  styleUrl: './qr-page.component.scss'
})
export class QrPageComponent {
  patient = {
    firstName: 'John',
    lastName: 'Doe',
    phone: '0551234567',
    emergencyContact: {
      name: 'Jane Doe',
      relationship: 'Spouse',
      phone: '0557654321'
    },
    illnesses: ['Diabetes', 'Hypertension'],
    medications: ['Metformin', 'Aspirin'],
    doctorNote: 'The patient should maintain regular check-ups and monitor blood sugar levels closely.'
  };
}
