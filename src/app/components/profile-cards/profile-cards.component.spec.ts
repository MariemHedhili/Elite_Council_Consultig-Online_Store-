import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileCardsComponent } from './profile-cards.component';

describe('ProfileCardsComponent', () => {
  let component: ProfileCardsComponent;
  let fixture: ComponentFixture<ProfileCardsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProfileCardsComponent]
    });
    fixture = TestBed.createComponent(ProfileCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
