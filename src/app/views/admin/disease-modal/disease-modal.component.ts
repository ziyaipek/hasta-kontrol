import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatDialogModule } from '@angular/material/dialog';
<<<<<<< HEAD
import { MatButtonModule } from '@angular/material/button'; // Mat-dialog butonları için gerekli
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';  // Form kontrolü için gerekli
import { MatInputModule } from '@angular/material/input'; // Input alanları için
=======
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox'; // Checkbox modülünü ekleyin

>>>>>>> 2bd0457 (fixed all bugs about MODAL)

@Component({
  selector: 'app-disease-modal',
  standalone: true,
<<<<<<< HEAD
  imports: [
    MatDialogModule,
    MatButtonModule,
    CommonModule,
    ReactiveFormsModule,
    MatInputModule
  ],
=======
  imports: [MatDialogModule, MatButtonModule, CommonModule, ReactiveFormsModule, MatInputModule,MatCheckboxModule],
>>>>>>> 2bd0457 (fixed all bugs about MODAL)
  templateUrl: './disease-modal.component.html',
})
export class DiseaseModalComponent {
  diseaseForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<DiseaseModalComponent>,
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.diseaseForm = this.fb.group({
<<<<<<< HEAD
      diseaseName: [''], // Hastalık adı alanı
      description: [''], // Hastalık açıklaması alanı
      symptoms: [''], // Belirtiler alanı
=======
      diseaseName: [data?.diseaseName || ''], // Gelen veriden hastalık adı
      symptoms: [data?.symptoms || ''],       // Gelen veriden semptomlar
      description: [data?.description || ''], // Gelen veriden açıklama
      isDeleted: [false],                      // Varsayılan olarak silinmemiş
>>>>>>> 2bd0457 (fixed all bugs about MODAL)
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onSubmit(): void {
    if (this.diseaseForm.valid) {
      this.dialogRef.close(this.diseaseForm.value);
    }
  }
}
