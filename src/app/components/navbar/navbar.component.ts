import { Component } from '@angular/core';

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
      routerLink: '',
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

  toggleMobileMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  toggleDropdown(link: Link): void {
    link.isOpen = !link.isOpen;
  }

  toggleMobileDropdown(link: Link): void {
    link.isOpen = !link.isOpen;
  }
}