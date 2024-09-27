import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http'
import { ApiService } from 'src/core/services/api/api.service';
import { Doctor } from 'src/core/models/Doctor';

@Component({
  selector: 'app-doctors',
  standalone: true,
  imports: [CommonModule,HttpClientModule],
  providers: [ApiService],
  templateUrl: './doctors.component.html',
  styleUrl: './doctors.component.scss'
})
export class DoctorsComponent {
  doctors : any[]=[];


  constructor(private apiService: ApiService){}

  ngOnInit(): void {
    this.apiService.getAllDoctors().subscribe((result) => {
      this.doctors = result.data;
      console.log(this.doctors);
    });
  }


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


