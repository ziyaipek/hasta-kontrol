import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button'; // Mat-dialog butonları için gerekli
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';  // Form kontrolü için gerekli
import { MatInputModule } from '@angular/material/input'; // Input alanları için

@Component({
  selector: 'app-edit-disease-modal',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule, CommonModule, ReactiveFormsModule, MatInputModule],
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
      diseaseName: [data.diseaseName],
      description: [data.description],
      symptoms: [data.symptoms],
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
