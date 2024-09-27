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
    FirstName: 'John',
    LastName: 'Doe',
    ContactInformation: '555-123-4567',
    EmergencyContactFirstName: 'Jane',
    EmergencyContactLastName: 'Doe',
    EmergencyContactPhone: '555-987-6543',
    illnesses: ['Diabetes', 'Hypertension', 'Migraine'],
    medications: ['Metformin', 'Lisinopril', 'Aspirin'],
  };
}
