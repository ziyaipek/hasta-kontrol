import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Patient } from 'src/core/models/Patient';
import { HttpClientModule } from '@angular/common/http'
import { ApiService } from 'src/core/services/api/api.service';
@Component({
  selector: 'app-patients',
  standalone: true,
  providers: [ApiService],
  imports: [CommonModule,HttpClientModule],
  templateUrl: './patients.component.html',
  styleUrl: './patients.component.scss'
})
export class PatientsComponent implements OnInit{
  patients : Patient[]=[];


  constructor(private apiService: ApiService){}

ngOnInit(): void {
  this.apiService.getAllPatients().subscribe((result) => {
    this.patients = result.data;
    console.log(this.patients);
  });
}


 
  editPatient(Id: number) {

    console.log('Hasta düzenleniyor: ', Id);
  }

  deletePatient(Id: number) {

    console.log('Hasta siliniyor: ', Id);

  }

  addNewPatient() {

    console.log('Yeni hasta ekleniyor');
  }
}
