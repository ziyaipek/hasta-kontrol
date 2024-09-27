import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QrPageComponent } from './qr-page.component';

describe('QrPageComponent', () => {
  let component: QrPageComponent;
  let fixture: ComponentFixture<QrPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QrPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QrPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
