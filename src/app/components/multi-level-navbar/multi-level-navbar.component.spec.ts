import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiLevelNavbarComponent } from './multi-level-navbar.component';

describe('MultiLevelNavbarComponent', () => {
  let component: MultiLevelNavbarComponent;
  let fixture: ComponentFixture<MultiLevelNavbarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MultiLevelNavbarComponent]
    });
    fixture = TestBed.createComponent(MultiLevelNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
