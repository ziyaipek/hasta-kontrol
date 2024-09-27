import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import { ApiEndpoints } from 'src/core/services/api/ApiEndpoints';

import { ApiService } from '../../../../core/services/api/api.service';
import { HttpClientModule } from '@angular/common/http';
import { Doctor } from 'src/core/models/Doctor';

@Component({
  selector: 'app-doctors',
  standalone: true,
  imports: [HttpClientModule],  // Angular common modülünü eklemelisiniz
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.scss']  // "styleUrls" olması gerekiyor
})
export class DoctorsComponent implements OnInit {

  doctors: Doctor[] = [];

  constructor(private readonly apiService: ApiService) { }

  ngOnInit(): void {
    this.getAllDoctors();
  }

  getAllDoctors() {
    this.apiService.getAllDoctors().subscribe((result) => {
      this.doctors = result.data;
      console.log(this.doctors);
    });

  }
  

  editDoctor(Id: number) {
    console.log('Editing doctor with ID: ', Id);
  }

  deleteDoctor(Id: number) {
    console.log('Deleting doctor with ID: ', Id);
  }

  addNewDoctor() {
    console.log('Adding new doctor');
  }
}
