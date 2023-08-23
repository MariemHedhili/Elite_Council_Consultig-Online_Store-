import { Component } from '@angular/core';
import { DarkModeService } from '../../our-services/dark-mode.service'

@Component({
  selector: 'app-dark-mode-toggle',
  templateUrl: './dark-mode-toggle.component.html',
  styleUrls: ['./dark-mode-toggle.component.css']
})
export class DarkModeToggleComponent {
  constructor(public darkModeService: DarkModeService) {}

  darkMode: any = this.darkModeService.darkMode$;

  toggleDarkMode() {
    this.darkModeService.toggleDarkMode();
  }
}
