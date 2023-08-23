import { ChangeDetectorRef, Component } from '@angular/core';
import { DarkModeService } from '../../our-services/dark-mode.service';
import { ScrollService } from 'src/app/scroll.service';

interface Sublink {
  name: string;
  routerLink: string;
}

interface Link {
  name: string;
  routerLink: string;
  subLinks: Sublink[];
  isOpen: boolean;
}

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent {
  isMobileMenuOpen = false;

  links: Link[] = [
    {
      name: 'Accueil',
      routerLink: '/',
      subLinks: [],
      isOpen: false
    },
    {
      name: 'Nos Solutions',
      routerLink: 'Solutions',
      subLinks: [
        { name: 'Consulting Technologique', routerLink: 'Consulting-Technologique' },
        { name: 'Solutions Techniques', routerLink: 'Solutions-Techniques' }
      ],
      isOpen: false
    },
    {
      name: 'À Propos',
      routerLink: 'About',
      subLinks: [],
      isOpen: false
    }

  ];

  constructor(private scrollService: ScrollService, private darkModeService: DarkModeService, private cdr: ChangeDetectorRef) {}

  toggleMobileMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  toggleDropdown(link: Link): void {
    link.isOpen = !link.isOpen;
  }

  toggleMobileDropdown(link: Link): void {
    link.isOpen = !link.isOpen;
  }

  toggleDarkMode() {
    this.darkModeService.toggleDarkMode();
    console.log(this.darkModeService.darkMode$)
    this.cdr.detectChanges();
  }

}