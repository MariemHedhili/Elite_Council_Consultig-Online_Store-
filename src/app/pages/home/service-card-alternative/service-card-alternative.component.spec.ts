import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceCardAlternativeComponent } from './service-card-alternative.component';

describe('ServiceCardAlternativeComponent', () => {
  let component: ServiceCardAlternativeComponent;
  let fixture: ComponentFixture<ServiceCardAlternativeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ServiceCardAlternativeComponent]
    });
    fixture = TestBed.createComponent(ServiceCardAlternativeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
