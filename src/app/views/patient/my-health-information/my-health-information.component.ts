import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule, GridModule } from '@coreui/angular'; 
@Component({
  selector: 'app-my-health-information',
  standalone: true,
  imports: [CommonModule, CardModule, GridModule],
  templateUrl: './my-health-information.component.html',
  styleUrl: './my-health-information.component.scss'
})
export class MyHealthInformationComponent {
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
