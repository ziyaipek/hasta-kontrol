import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button'; // Mat-dialog butonları için gerekli
import { CommonModule } from '@angular/common';
import { MatCheckboxModule } from '@angular/material/checkbox'; // Checkbox modülünü ekleyin
import { ReactiveFormsModule } from '@angular/forms';  // Form kontrolü için gerekli
import { MatInputModule } from '@angular/material/input'; // Input alanları için

@Component({
  selector: 'app-edit-patient-modal',
  standalone : true,
  imports : [MatDialogModule, MatButtonModule, CommonModule, MatCheckboxModule, ReactiveFormsModule, MatInputModule],
  templateUrl: './edit-patient-modal.component.html',
})
export class EditPatientModalComponent {
  patientForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<EditPatientModalComponent>,
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.patientForm = this.fb.group({
      firstName: [data.firstName],
      lastName: [data.lastName],
      dateOfBirth: [data.dateOfBirth],
      gender: [data.gender],
      contactInformation: [data.contactInformation],
      username: [data.username],
      password: [data.password],
      emergencyContactFirstName: [data.emergencyContactFirstName],
      emergencyContactLastName: [data.emergencyContactLastName],
      emergencyContactPhone: [data.emergencyContactPhone],
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
