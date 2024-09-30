import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatDialogModule } from '@angular/material/dialog';
<<<<<<< HEAD
import { MatButtonModule } from '@angular/material/button'; // Mat-dialog butonları için gerekli
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';  // Form kontrolü için gerekli
import { MatInputModule } from '@angular/material/input'; // Input alanları için

@Component({
  selector: 'app-edit-disease-modal',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule, CommonModule, ReactiveFormsModule, MatInputModule],
=======
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-edit-disease-modal',
  standalone : true,
  imports : [MatDialogModule, MatButtonModule, CommonModule, MatCheckboxModule, ReactiveFormsModule, MatInputModule],
>>>>>>> 2bd0457 (fixed all bugs about MODAL)
  templateUrl: './edit-disease-modal.component.html',
})
export class EditDiseaseModalComponent {
  diseaseForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<EditDiseaseModalComponent>,
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.diseaseForm = this.fb.group({
<<<<<<< HEAD
      diseaseName: [data.diseaseName],
      description: [data.description],
      symptoms: [data.symptoms],
=======
      name: [data.diseaseName],
      symptoms: [data.symptoms],
      description: [data.description],
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
