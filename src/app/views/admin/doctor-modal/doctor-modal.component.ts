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
  selector: 'app-doctor-modal',
  standalone : true,
  imports : [MatDialogModule,MatButtonModule,CommonModule,MatCheckboxModule,ReactiveFormsModule,MatInputModule],
  templateUrl: './doctor-modal.component.html',
})
export class DoctorModalComponent {
  doctorForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<DoctorModalComponent>,
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.doctorForm = this.fb.group({
      firstName: [''],
      lastName: [''],
      contactInformation: [''],
      doctorUsername: [''],
      doctorPassword: [''],
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
