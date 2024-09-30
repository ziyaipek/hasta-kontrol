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
  selector: 'app-medicine-modal',
  standalone: true,
  imports: [
    MatDialogModule,
    MatButtonModule,
    CommonModule,
    MatCheckboxModule,
    ReactiveFormsModule,
    MatInputModule
  ],
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
      medicationName: [''], // İlaç adı alanı
      activeIngredient: [''], // Etkin madde alanı
      usageInstructions: [''], // Kullanım talimatları alanı
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
