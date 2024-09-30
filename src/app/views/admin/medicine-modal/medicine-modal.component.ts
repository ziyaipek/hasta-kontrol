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
=======
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox'; // Checkbox modülünü ekleyin

>>>>>>> 2bd0457 (fixed all bugs about MODAL)

@Component({
  selector: 'app-medicine-modal',
  standalone: true,
<<<<<<< HEAD
  imports: [
    MatDialogModule,
    MatButtonModule,
    CommonModule,
    MatCheckboxModule,
    ReactiveFormsModule,
    MatInputModule
  ],
=======
  imports: [MatCheckboxModule,MatDialogModule, MatButtonModule, CommonModule, ReactiveFormsModule, MatInputModule],
>>>>>>> 2bd0457 (fixed all bugs about MODAL)
  templateUrl: './medicine-modal.component.html',
})
export class MedicineModalComponent {
  medicineForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<MedicineModalComponent>,
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.medicineForm = this.fb.group({
<<<<<<< HEAD
      medicationName: [''], // İlaç adı alanı
      activeIngredient: [''], // Etkin madde alanı
      usageInstructions: [''], // Kullanım talimatları alanı
=======
      medicationName: [''],
      usageInstructions: [''],
      activeIngredient: [''],
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
