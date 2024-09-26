import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthReportsComponent } from './health-reports.component';

describe('HealthReportsComponent', () => {
  let component: HealthReportsComponent;
  let fixture: ComponentFixture<HealthReportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HealthReportsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HealthReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
