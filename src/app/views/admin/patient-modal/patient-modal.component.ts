import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button'; // Mat-dialog butonları için gerekli
import { CommonModule } from '@angular/common';
import { MatCheckboxModule } from '@angular/material/checkbox'; // Checkbox modülünü ekleyin
import { ReactiveFormsModule } from '@angular/forms';  // Form kontrolü için gerekli
import { MatInputModule } from '@angular/material/input'; // Input alanları için
import { MatSelectModule } from '@angular/material/select'; // Cinsiyet için dropdown

@Component({
  selector: 'app-patient-modal',
  standalone: true,
  imports: [
    MatDialogModule,
    MatButtonModule,
    CommonModule,
    MatCheckboxModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSelectModule // Cinsiyet seçimi için ekledik
  ],
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
      dateOfBirth: [''], // Doğum tarihi alanı
      gender: [''], // Cinsiyet seçimi
      contactInformation: [''],
      username: [''],
      password: [''],
      emergencyContactFirstName: [''], // Acil durum kişi ismi
      emergencyContactLastName: [''],  // Acil durum kişi soyadı
      emergencyContactPhone: [''],     // Acil durum kişi telefonu
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
