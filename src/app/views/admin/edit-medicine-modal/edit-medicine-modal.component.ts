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
  selector: 'app-edit-medicine-modal',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule, CommonModule, ReactiveFormsModule, MatInputModule],
=======
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-edit-medicine-modal',
  standalone : true,
  imports : [MatDialogModule, MatButtonModule, CommonModule, MatCheckboxModule, ReactiveFormsModule, MatInputModule],
>>>>>>> 2bd0457 (fixed all bugs about MODAL)
  templateUrl: './edit-medicine-modal.component.html',
})
export class EditMedicineModalComponent {
  medicineForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<EditMedicineModalComponent>,
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.medicineForm = this.fb.group({
<<<<<<< HEAD
      medicationName: [data.medicationName],
      activeIngredient: [data.activeIngredient],
      usageInstructions: [data.usageInstructions],
=======
      name: [data.medicationName],
      usageInstructions: [data.usageInstructions],
      activeIngredient: [data.activeIngredient],
>>>>>>> 2bd0457 (fixed all bugs about MODAL)
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onSubmit(): void {
    if (this.medicineForm.valid) {
      this.dialogRef.close(this.medicineForm.value);
    }
  }
}
