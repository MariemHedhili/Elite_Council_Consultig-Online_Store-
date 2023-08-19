import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolutionsLogiciellesComponent } from './solutions-logicielles.component';

describe('SolutionsLogiciellesComponent', () => {
  let component: SolutionsLogiciellesComponent;
  let fixture: ComponentFixture<SolutionsLogiciellesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SolutionsLogiciellesComponent]
    });
    fixture = TestBed.createComponent(SolutionsLogiciellesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
