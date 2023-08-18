import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultingTechnologiqueComponent } from './consulting-technologique.component';

describe('ConsultingTechnologiqueComponent', () => {
  let component: ConsultingTechnologiqueComponent;
  let fixture: ComponentFixture<ConsultingTechnologiqueComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConsultingTechnologiqueComponent]
    });
    fixture = TestBed.createComponent(ConsultingTechnologiqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
