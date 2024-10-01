import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiseaseModalComponent } from './disease-modal.component';

describe('DiseaseModalComponent', () => {
  let component: DiseaseModalComponent;
  let fixture: ComponentFixture<DiseaseModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DiseaseModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiseaseModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
