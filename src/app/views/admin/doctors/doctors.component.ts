import { Component } from '@angular/core';

@Component({
  selector: 'app-doctors',
  standalone: true,
  imports: [],
  templateUrl: './doctors.component.html',
  styleUrl: './doctors.component.scss'
})
export class DoctorsComponent {


  editDoctor(id: number) {

    console.log('Doktor düzenleniyor: ', id);
  }

  deleteDoctor(id: number) {

    console.log('Doktor siliniyor: ', id);

  }

  addNewDoctor() {

    console.log('Yeni doktor ekleniyor');
  }
}


