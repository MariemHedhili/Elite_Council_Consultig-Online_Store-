import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DarkModeService {
  private darkModeSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public darkMode$: Observable<boolean> = this.darkModeSubject.asObservable();

  constructor() {
    const storedDarkMode = localStorage.getItem('darkMode');
    if (storedDarkMode !== null) {
      this.darkModeSubject.next(JSON.parse(storedDarkMode));
    }
  }

  toggleDarkMode() {
    const newValue = !this.darkModeSubject.value;
    this.darkModeSubject.next(newValue);
    localStorage.setItem('darkMode', JSON.stringify(newValue));
  }
}
