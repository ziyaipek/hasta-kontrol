import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditMedicineModalComponent } from './edit-medicine-modal.component';

describe('EditMedicineModalComponent', () => {
  let component: EditMedicineModalComponent;
  let fixture: ComponentFixture<EditMedicineModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditMedicineModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditMedicineModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
