import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolutionsTechniquesComponent } from './solutions-techniques.component';

describe('SolutionsTechniquesComponent', () => {
  let component: SolutionsTechniquesComponent;
  let fixture: ComponentFixture<SolutionsTechniquesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SolutionsTechniquesComponent]
    });
    fixture = TestBed.createComponent(SolutionsTechniquesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
