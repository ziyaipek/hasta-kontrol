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
  selector: 'app-edit-doctor-modal',
  standalone : true,
  imports : [MatDialogModule,MatButtonModule,CommonModule,MatCheckboxModule,ReactiveFormsModule,MatInputModule],
  templateUrl: './edit-doctor-modal.component.html',
})
export class EditDoctorModalComponent {
  doctorForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<EditDoctorModalComponent>,
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.doctorForm = this.fb.group({
      firstName: [data.firstName],
      lastName: [data.lastName],
      contactInformation: [data.contactInformation],
      doctorUsername: [data.doctorUsername],
      doctorPassword: [data.doctorPassword],
      isDeleted: [false],
      isFirstLogin: [true],
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onSubmit(): void {
    if (this.doctorForm.valid) {
      this.dialogRef.close(this.doctorForm.value);
    }
  }
}
