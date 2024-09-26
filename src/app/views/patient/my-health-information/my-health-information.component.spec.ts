import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyHealthInformationComponent } from './my-health-information.component';

describe('MyHealthInformationComponent', () => {
  let component: MyHealthInformationComponent;
  let fixture: ComponentFixture<MyHealthInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyHealthInformationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyHealthInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
