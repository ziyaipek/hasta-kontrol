import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatDialogModule } from '@angular/material/dialog';
<<<<<<< HEAD
import { MatButtonModule } from '@angular/material/button'; // Mat-dialog butonları için gerekli
import { CommonModule } from '@angular/common';
import { MatCheckboxModule } from '@angular/material/checkbox'; // Checkbox modülünü ekleyin
import { ReactiveFormsModule } from '@angular/forms';  // Form kontrolü için gerekli
import { MatInputModule } from '@angular/material/input'; // Input alanları için
import { MatSelectModule } from '@angular/material/select'; // Cinsiyet için dropdown
=======
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox'; // Checkbox modülünü ekleyin
import { MatDatepickerModule } from '@angular/material/datepicker'; // Datepicker modülü
import { MatNativeDateModule } from '@angular/material/core'; // Native date modülü
import { MatSelectModule } from '@angular/material/select'; // Select modülü
import { provideMomentDateAdapter } from '@angular/material-moment-adapter'; // Moment için

>>>>>>> 2bd0457 (fixed all bugs about MODAL)

@Component({
  selector: 'app-patient-modal',
  standalone: true,
<<<<<<< HEAD
<<<<<<< HEAD
  imports: [
    MatDialogModule,
    MatButtonModule,
    CommonModule,
    MatCheckboxModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSelectModule // Cinsiyet seçimi için ekledik
  ],
=======
  imports: [MatNativeDateModule,MatSelectModule,MatDatepickerModule,MatCheckboxModule,MatDialogModule, MatButtonModule, CommonModule, ReactiveFormsModule, MatInputModule],
>>>>>>> 2bd0457 (fixed all bugs about MODAL)
=======
  imports: [
    MatNativeDateModule,
    MatSelectModule,
    MatDatepickerModule,
    MatCheckboxModule,
    MatDialogModule,
    MatButtonModule,
    CommonModule,
    ReactiveFormsModule,
    MatInputModule
  ],
  providers: [
    provideMomentDateAdapter() // Bu satırı ekleyin, eğer Moment.js kullanıyorsanız
  ],
>>>>>>> f7338b1 (patient-model-comp)
  templateUrl: './patient-modal.component.html',
})
export class PatientModalComponent {
  patientForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<PatientModalComponent>,
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.patientForm = this.fb.group({
      firstName: [''],
      lastName: [''],
<<<<<<< HEAD
      dateOfBirth: [''], // Doğum tarihi alanı
      gender: [''], // Cinsiyet seçimi
      contactInformation: [''],
      username: [''],
      password: [''],
      emergencyContactFirstName: [''], // Acil durum kişi ismi
      emergencyContactLastName: [''],  // Acil durum kişi soyadı
      emergencyContactPhone: [''],     // Acil durum kişi telefonu
=======
      contactInformation: [''],
      dateOfBirth: [''],
      gender: [''],
      emergencyContactFirstName: [''],
      emergencyContactLastName: [''],
      emergencyContactPhone: [''],
>>>>>>> 2bd0457 (fixed all bugs about MODAL)
      isDeleted: [false],
      isFirstLogin: [true],
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onSubmit(): void {
    if (this.patientForm.valid) {
      this.dialogRef.close(this.patientForm.value);
    }
  }
}
