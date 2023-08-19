import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolutionsMateriellesComponent } from './solutions-materielles.component';

describe('SolutionsMateriellesComponent', () => {
  let component: SolutionsMateriellesComponent;
  let fixture: ComponentFixture<SolutionsMateriellesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SolutionsMateriellesComponent]
    });
    fixture = TestBed.createComponent(SolutionsMateriellesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
