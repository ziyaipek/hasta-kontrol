import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDiseaseModalComponent } from './edit-disease-modal.component';

describe('EditDiseaseModalComponent', () => {
  let component: EditDiseaseModalComponent;
  let fixture: ComponentFixture<EditDiseaseModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditDiseaseModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditDiseaseModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
