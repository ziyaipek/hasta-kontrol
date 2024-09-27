import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-patients',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './patients.component.html',
  styleUrl: './patients.component.scss'
})
export class PatientsComponent {
  patients = [
    { id: 1, firstName: 'Ayşe', lastName: 'Demir', phone: '055124562' },
    { id: 2, firstName: 'Mehmet', lastName: 'Kaya', phone: '0512345786' },
    { id: 3, firstName: 'Ali', lastName: 'Veli', phone: '0521354235' }
  ];

  editPatient(id: number) {

    console.log('Hasta düzenleniyor: ', id);
  }

  deletePatient(id: number) {

    console.log('Hasta siliniyor: ', id);

  }

  addNewPatient() {

    console.log('Yeni hasta ekleniyor');
  }
}
