import { Component } from '@angular/core';

@Component({
  selector: 'app-my-patients',
  standalone: true,
  imports: [],
  templateUrl: './my-patients.component.html',
  styleUrl: './my-patients.component.scss'
})
export class MyPatientsComponent {
  editPatient(id: number) {

    console.log('Doktor düzenleniyor: ', id);
  }

  deletePatient(id: number) {

    console.log('Doktor siliniyor: ', id);

  }

  addNewPatient() {

    console.log('Yeni doktor ekleniyor');
  }
}
